import fs from 'fs';
import chalk from 'chalk';


const filename = process.env.DB_FILE;
const warn = chalk.yellowBright.bold;
const success = chalk.greenBright.bold;



export default class DB {
    static createDB() {
     if(fs.existsSync(filename)) {
        console.log(warn('database already exist'));
        return false;
     }   
     try {
        fs.writeFileSync(filename,'[]','utf-8');
        console.log(success('database create successfully'));
        return true;
     } catch (error) {
        
     }
    }

    static resetDB() {  
        try {
           fs.writeFileSync(filename,'[]','utf-8');
           console.log(success('database reset successfully'));
           return true;
        } catch (error) {
           throw new Error(wran('database reset failed'))
        }
    }

    static existDB() {
        if(fs.existsSync(filename)){
            return true;
        }else {
            cre
            return false;
        }
    }

    static getTaskById(id) {
        let data;
        if(DB.existDB()) {
            data = fs.readFileSync(filename);
            try {
                data = JSON.parse(data);
                const task = data.find((t) => t.id === Number(id));
                return task ? task : false;
            } catch (error) {
                throw new Error(wran('syntaxt error'))
            }
        }else{
            DB.createDB();
            return false;
        }


    }

    static getTaskByTitle(title) {

    }
    
    static getTaskAll(title,completed = false,id = 0) {

    }

}