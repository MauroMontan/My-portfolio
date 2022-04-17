export interface Tag {
  name: string;
}

export interface Project {
  name: string;
  description: string;
  tags: Array<Tag>;
  repository: string;
  link: string;
}

export interface Skill {
  technology: string;
  icon: string;
  description: string;
}
