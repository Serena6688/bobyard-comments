const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8001/api";

export async function listComments() {
  const res = await fetch(`${API_BASE}/comments/`);
  if (!res.ok) throw new Error("Failed to load comments");
  return res.json();
}

export async function addComment(text) {
  const res = await fetch(`${API_BASE}/comments/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error("Failed to add comment");
  // 后端 create 返回空对象也没关系：我们直接重新拉列表
  return res.json().catch(() => ({}));
}

export async function updateComment(id, text) {
  const res = await fetch(`${API_BASE}/comments/${id}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error("Failed to update comment");
  return res.json();
}

export async function deleteComment(id) {
  const res = await fetch(`${API_BASE}/comments/${id}/`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete comment");
}