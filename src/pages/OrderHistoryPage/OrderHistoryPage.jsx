import { checkToken } from "../../Utilities/users-service"

export default function OrderHistoryPage () {

    const handleCheckToken= () => {
        checkToken();
      };

    return (
        <>
        <h1>OrderHistoryPage</h1>
        <button onClick={handleCheckToken}>Verify Login</button>    
        </>
    )
}