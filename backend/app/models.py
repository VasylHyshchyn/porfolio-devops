from . import db

class Project(db.Model):
    __tablename__ = "projects"

    id          = db.Column(db.Integer, primary_key=True)
    title       = db.Column(db.String(120), nullable=False)
    description = db.Column(db.Text)
    tech_stack  = db.Column(db.ARRAY(db.String))
    github_url  = db.Column(db.String(255))
    demo_url    = db.Column(db.String(255))
    created_at  = db.Column(db.DateTime, server_default=db.func.now())

    def to_dict(self):
        return {
            "id":          self.id,
            "title":       self.title,
            "description": self.description,
            "tech_stack":  self.tech_stack or [],
            "github_url":  self.github_url,
            "demo_url":    self.demo_url,
            "created_at":  self.created_at.isoformat() if self.created_at else None,
        }