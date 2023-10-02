import fs from 'fs';
import path from 'path';
/**retrieve list of files within the /public folder */
export const getListOfFilesUrlFromFolder = (folderPath) => {
  const ListPath = path.join(process.cwd(), `/public/${folderPath}`);
  return fs.readdirSync(ListPath).map((name) => `${folderPath}/${name}`);
};
