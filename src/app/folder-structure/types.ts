export interface File {
  isFile: boolean;
  name: string;
  files: File[];
}
