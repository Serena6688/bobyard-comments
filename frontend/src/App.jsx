import React, { useEffect, useMemo, useState } from "react";
import { addComment, deleteComment, listComments, updateComment } from "./api";
import "./styles.css";

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, { year: "numeric", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit" });
}

function Avatar({ author }) {
  const letter = (author?.[0] || "?").toUpperCase();
  return <div className="avatar">{letter}</div>;
}

function CommentCard({ c, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(c.text);
  const [saving, setSaving] = useState(false);

  useEffect(() => setDraft(c.text), [c.text]);

  async function save() {
    setSaving(true);
    try {
      await onEdit(c.id, draft);
      setIsEditing(false);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="card">
      <div className="cardLeft">
        <Avatar author={c.author} />
      </div>

      <div className="cardMain">
        <div className="meta">
          <div className="author">{c.author}</div>
          <div className="dot">•</div>
          <div className="date">{formatDate(c.date)}</div>
          <div className="likes">❤️ {c.likes}</div>
        </div>

        {!isEditing ? (
          <div className="text">{c.text}</div>
        ) : (
          <textarea
            className="editor"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={4}
          />
        )}

        {c.image ? (
          <div className="imageWrap">
            <img className="image" src={c.image} alt="comment" />
          </div>
        ) : null}

        <div className="actions">
          {!isEditing ? (
            <button className="btn" onClick={() => setIsEditing(true)}>Edit</button>
          ) : (
            <>
              <button className="btnPrimary" disabled={saving} onClick={save}>
                {saving ? "Saving..." : "Save"}
              </button>
              <button className="btn" disabled={saving} onClick={() => { setDraft(c.text); setIsEditing(false); }}>
                Cancel
              </button>
            </>
          )}

          <button className="btnDanger" onClick={() => onDelete(c.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newText, setNewText] = useState("");
  const [error, setError] = useState("");

  const count = useMemo(() => comments.length, [comments]);

  async function refresh() {
    setError("");
    setLoading(true);
    try {
      const data = await listComments();
      setComments(data);
    } catch (e) {
      setError(e.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { refresh(); }, []);

  async function handleAdd() {
    const t = newText.trim();
    if (!t) return;
    setError("");
    try {
      await addComment(t);
      setNewText("");
      await refresh();
    } catch (e) {
      setError(e.message || "Failed to add");
    }
  }

  async function handleEdit(id, text) {
    setError("");
    await updateComment(id, text);
    await refresh();
  }

  async function handleDelete(id) {
    setError("");
    // 简单确认：demo 友好
    if (!confirm("Delete this comment?")) return;
    await deleteComment(id);
    await refresh();
  }

  return (
    <div className="page">
      <div className="header">
        <div>
          <h1 className="title">Comments</h1>
          <div className="subtitle">{count} total</div>
        </div>
      </div>

      <div className="composer">
        <div className="composerRow">
          <div className="composerAvatar"><Avatar author="Admin" /></div>
          <textarea
            className="composerInput"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            rows={3}
            placeholder="Write a comment as Admin..."
          />
        </div>
        <div className="composerActions">
          <button className="btnPrimary" onClick={handleAdd}>Add Comment</button>
          <button className="btn" onClick={() => setNewText("")}>Clear</button>
        </div>
      </div>

      {error ? <div className="error">{error}</div> : null}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="list">
          {comments.map((c) => (
            <CommentCard key={c.id} c={c} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}