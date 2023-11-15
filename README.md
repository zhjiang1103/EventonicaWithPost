
# Quick-setup 

#### Once you have successfully setup this template and initial database, the view will look like this:

![Initial View of the project](https://github.com/zhjiang1103/EventonicaWithPost/blob/fixing/Screen%20Shot%202023-11-15%20at%2010.55.52%20AM.png?raw=true)
### Initial Set-up steps

1. Go to your source directory in your terminal and run the command `git clone https://github.com/zhjiang1103/EventonicaWithPost.git <NAMENEWDIRECTORY>`

2. To clean your folder from the owner's git, run the command `rm -rf .git` inside the folder <NAMENEWDIRECTORY>. Then re-initialize as the owner with `git init`.

3. Go to the server folder in the project (`cd server`) and run the command `npm install`

4. Go to the client folder (`cd .. and cd client`) and run the command `npm install`

5. This template has two servers already working. Both servers should start simultaneously, or "concurrently", by running `npm run dev` from within the server directory in your terminal. Please note that your backend server will run from port 8080, and your frontend React server will run from port 3000 .

6. To add a Postgres DB - you will need another terminal window for this part

 Inside your server directory create a `.env` file and copy there the values that are in `.envexample`

# Links that you will need

* The instructions for [pg](https://node-postgres.com/apis/pool)  
* Setup [postgres correctly](https://github.com/Techtonica/curriculum/blob/main/databases/installing-postgresql.md).



