import CustomErrorComponent from "../UI/CustomErrorComponent";
import Todo from "../Todo";

const TodoSection = async()=> {
  const baseURL= process.env.NEXT_PUBLIC_BASE_URL
  let todoData;
  try {

    const res = await fetch(`${baseURL}/api/todo/festival`, {method: "GET"})
    todoData = await res.json()


  } catch (error:any){
    return <section className="w-full h-[5rem] relative" id="todo"><CustomErrorComponent isFixed={false} title="An Error occurred" message="Error fetching data" /></section>
    
  }

  return <section id="todo">
    <Todo places={todoData.data} baseUrl={baseURL as string} />
  </section>
}

export default TodoSection;