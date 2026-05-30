from flask import Blueprint, jsonify, request
from . import db
from .models import Project

bp = Blueprint("api", __name__, url_prefix="/api")

@bp.get("/projects")
def get_projects():
    projects = Project.query.order_by(Project.created_at.desc()).all()
    return jsonify([p.to_dict() for p in projects])

@bp.get("/projects/<int:id>")
def get_project(id):
    p = db.get_or_404(Project, id)
    return jsonify(p.to_dict())

@bp.post("/projects")
def create_project():
    data = request.get_json()
    p = Project(
        title=data["title"],
        description=data.get("description"),
        tech_stack=data.get("tech_stack", []),
        github_url=data.get("github_url"),
        demo_url=data.get("demo_url"),
    )
    db.session.add(p)
    db.session.commit()
    return jsonify(p.to_dict()), 201

@bp.delete("/projects/<int:id>")
def delete_project(id):
    p = db.get_or_404(Project, id)
    db.session.delete(p)
    db.session.commit()
    return jsonify({"deleted": id})

@bp.get("/health")
def health():
    try:
        db.session.execute(db.text("SELECT 1"))
        return jsonify({"status": "ok", "db": "connected"})
    except Exception as e:
        return jsonify({"status": "error", "db": str(e)}), 500