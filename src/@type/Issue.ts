interface Issue {
  _id: number;
  title: string;
  tags: Tag[];
  status: string;
  "open-date": string;
  creator: string;
  projects: string;
  milestones: string;
  assignee: string;
  subtask: string[];
  "comments-count": number;
}

type Tag = {
  tagName: string;
  color: string;
};
