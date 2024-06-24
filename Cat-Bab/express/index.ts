import express, { Request, Response, Application } from "express";
import users from "./dumm/user.json" assert { type: "json" };

const PORT = 8000;
const app: Application = express();
app.use(express.json());

const newuser = {
  id: 100+users.data.length + 1,
  name: "Cater",
  age: 20,
  gender: "female",
  hobbies: ["sleeping","lol"],
  createdAt: "2015-06-10",
};

app.get("/api/users", (req: Request, res: Response) => {
  return res.send(users);
});

app.get("/users/:id", (request: Request, response: Response) => {
  const userId = parseInt(request.params.id);
  response.send(users.data.find((user) => user.id === userId));
});
app.post("/api/users", (req: Request, res: Response) => {
  users.data.push(newuser);
  res.send(newuser);  
});

app.delete("/api/users", (req: Request, res: Response) =>{
    users.data.pop();
    res.send(users);
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
