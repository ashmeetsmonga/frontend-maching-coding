export interface File {
  id: number;
  isFile: boolean;
  name: string;
  files: File[];
}
