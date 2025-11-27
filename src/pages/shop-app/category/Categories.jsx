import { useNavigate } from "react-router-dom";

const Categories = () => {
    const navigate = useNavigate();

    const handleClick = (role) => {
        navigate("/create-product", { state: { role } })
    };
    return (
        <div className="flex items-center justify-center gap-4 mt-5">
        {["Fundi", "Professional", "Contractor", "Hardware"].map((role) => (
              <button 
                key={role}
                type='button' 
                onClick={() => handleClick(role)}
                className="bg-[rgb(0,0,122)] cursor-pointer text-white px-6 py-2.5 rounded-lg hover:bg-[rgb(0,0,150)] hover:transition hover:scale-105 hover:ease-in-out hover:duration-500 flex items-center gap-2 shadow-sm"
              >
                {role}
              </button>
        ))}
      </div>
    )
};

export default Categories;