import * as path from 'path';
import * as fs  from 'fs';

export const loadGQlFile = (type)=> {
    const filePath = path.join(__dirname, '../graphqlConfig', type);
    return fs.readFileSync(filePath, 'utf-8');
};