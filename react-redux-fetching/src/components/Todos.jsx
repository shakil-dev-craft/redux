import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosActions";

const Todos = () => {

    const todos = useSelector(state => state);
    console.log(todos);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch])

    return (
        <div>
            <h1>Todos App</h1>
        </div>
    );
};

export default Todos;