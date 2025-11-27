import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminSideNav from "../components/Navigation/AdminSideNav";
const Register = () => {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedBuilderType, setSelectedBuilderType] = useState('');
  const [selectedCustomerType, setSelectedCustomerType] = useState(""); // NEW: Added state for customer type
  const [registerType, setRegisterType] = useState("Builders"); // NEW: "Customers" or "Builders"
  const location = useLocation(); 

  
  

  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const skill = searchParams.get("skill");
    const type = searchParams.get("type");

    if (skill) setSelectedSkill(skill);
    if (type) setRegisterType(type); // set type to "Customers" or "Builders"
  }, [location.search]);
  
  // Sample Data
  const builders = [
      { id: 1, creationDate: "2024-03-10", skill: "Fundi", firstName: "John", lastName: "Doe" },
      { id: 2, creationDate: "2024-03-10", skill: "Professional", firstName: "Jane", lastName: "Smith" },
      { id: 3, creationDate: "2024-03-10", skill: "Contractor", firstName: "Mike", lastName: "Brown" },
      { id: 4, creationDate: "2024-03-10", skill: "Hardware", firstName: "Alice", lastName: "Jones" },
      { id: 5, creationDate: "2024-03-10", skill: "Fundi", firstName: "Emma", lastName: "Wilson" },
      { id: 6, creationDate: "2024-03-10", skill: "Contractor", firstName: "Sarah", lastName: "Taylor" },
      { id: 7, creationDate: "2024-03-10", skill: "Professional", firstName: "James", lastName: "Williams" },
      { id: 8, creationDate: "2024-03-10", skill: "Fundi", firstName: "John", lastName: "Doe" },
      { id: 9, creationDate: "2024-03-10", skill: "Professional", firstName: "Jane", lastName: "Smith" },
      { id: 10, creationDate: "2024-03-10", skill: "Contractor", firstName: "Mike", lastName: "Brown" },
      { id: 11, creationDate: "2024-03-10", skill: "Hardware", firstName: "Alice", lastName: "Jones" },
      { id: 12, creationDate: "2024-03-10", skill: "Fundi", firstName: "Emma", lastName: "Wilson" },
    ];
    

  const customers = [
    { id: 1, creationDate: "2024-03-10", customerType: "Individual", firstName: "John", lastName: "Doe", nationalId: "38018271", phone: "0740189463", email: "john.doe@example.com", county: "Nairobi", subCounty: "Westlands" },
    { id: 2, creationDate: "2024-03-11", customerType: "Organization", firstName: "Jane", lastName: "Smith", nationalId: "38018272", phone: "0740189464", email: "jane.smith@example.com", county: "Kiambu", subCounty: "Thika" },
    { id: 3, creationDate: "2024-03-12", customerType: "Individual", firstName: "Mike", lastName: "Brown", nationalId: "38018273", phone: "0740189465", email: "mike.brown@example.com", county: "Mombasa", subCounty: "Nyali" },
    { id: 4, creationDate: "2024-03-13", customerType: "Organization", firstName: "Alice", lastName: "Jones", nationalId: "38018274", phone: "0740189466", email: "alice.jones@example.com", county: "Kisumu", subCounty: "Kisumu Central" },
    { id: 5, creationDate: "2024-03-14", customerType: "Individual", firstName: "Emma", lastName: "Wilson", nationalId: "38018275", phone: "0740189467", email: "emma.wilson@example.com", county: "Nakuru", subCounty: "Nakuru East" },
    { id: 6, creationDate: "2024-03-15", customerType: "Organization", firstName: "Chris", lastName: "Taylor", nationalId: "38018276", phone: "0740189468", email: "chris.taylor@example.com", county: "Machakos", subCounty: "Machakos Town" },
    { id: 7, creationDate: "2024-03-16", customerType: "Individual", firstName: "Liam", lastName: "Ngugi", nationalId: "38018277", phone: "0740189469", email: "liam.ngugi@example.com", county: "Murang'a", subCounty: "Kangema" },
    { id: 8, creationDate: "2024-03-17", customerType: "Organization", firstName: "Sophia", lastName: "Kamau", nationalId: "38018278", phone: "0740189470", email: "sophia.kamau@example.com", county: "Embu", subCounty: "Runyenjes" },
    { id: 9, creationDate: "2024-03-18", customerType: "Individual", firstName: "Daniel", lastName: "Ouma", nationalId: "38018279", phone: "0740189471", email: "daniel.ouma@example.com", county: "Homa Bay", subCounty: "Rangwe" },
    { id: 10, creationDate: "2024-03-19", customerType: "Organization", firstName: "Grace", lastName: "Mwangi", nationalId: "38018280", phone: "0740189472", email: "grace.mwangi@example.com", county: "Nyeri", subCounty: "Tetu" },
    { id: 11, creationDate: "2024-03-20", customerType: "Individual", firstName: "Brian", lastName: "Otieno", nationalId: "38018281", phone: "0740189473", email: "brian.otieno@example.com", county: "Kakamega", subCounty: "Shinyalu" },
    { id: 12, creationDate: "2024-03-21", customerType: "Organization", firstName: "Naomi", lastName: "Wanjiku", nationalId: "38018282", phone: "0740189474", email: "naomi.wanjiku@example.com", county: "Kericho", subCounty: "Ainamoi" },
   
  ];


    const navigate = useNavigate();
    
  
  
  const filteredBuilders = selectedSkill
    ? builders.filter((entry) => entry.skill === selectedSkill)
    : builders;

  const filteredCustomers = selectedCustomerType
    ? customers.filter(
        (customer) => customer.customerType === selectedCustomerType
      )
    : customers;
    

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
            <AdminSideNav />
      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        
        {/* Navigation Bar */}
        <div className="max-w-10xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
          {/* Skill Filter Only for Builders */}
          {registerType === "Builders" && (
            <div className="bg-gray-300 p-4 flex justify-center shadow-md gap-2">
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => {
                  setSelectedBuilderType('Professional');
                  navigate('/professional-register'); // Navigate to /professional
                }}
                className={`px-6 py-2 rounded-md font-semibold transition ${
                  selectedBuilderType === 'Professional'
                    ? 'bg-blue-800 text-white'
                    : 'bg-blue-200 text-gray-800 hover:bg-blue-800'
                }`}
              >
                Professional
              </button>
  
              <button
                type="button"
                onClick={() => {
                  setSelectedBuilderType('Fundi');
                  navigate('/fundi-register'); // Navigate to /fundi
                }}
                className={`px-6 py-2 rounded-md font-semibold transition ${
                  selectedBuilderType === 'Fundi'
                    ? 'bg-blue-800 text-white'
                    : 'bg-blue-200 text-gray-800 hover:bg-blue-800'
                }`}
              >
                Fundi
              </button>
  
              <button
                type="button"
                onClick={() => {
                  setSelectedBuilderType('Contractor');
                  navigate('/contractor-register'); // Navigate to /contractor
                }}
                className={`px-6 py-2 rounded-md font-semibold transition ${
                  selectedBuilderType === 'Contractor'
                    ? 'bg-blue-800 text-white'
                    : 'bg-blue-200 text-gray-800 hover:bg-blue-800'
                }`}
              >
                Contractor
              </button>
  
              <button
                type="button"
                onClick={() => {
                  setSelectedBuilderType('Hardware');
                  navigate('/hardware-register'); // Navigate to /hardware
                }}
                className={`px-6 py-2 rounded-md font-semibold transition ${
                  selectedBuilderType === 'Hardware'
                    ? 'bg-blue-800 text-white'
                    : 'bg-blue-200 text-gray-800 hover:bg-blue-800'
                }`}
              >
                Hardware
              </button>
            </div>
          </div>
          )}

       {/* Customer Type Tabs Only for Customers */}
       {registerType === 'Customers' && (
        <div className="bg-gray-300 p-4 flex justify-center shadow-md gap-2">
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => {
              setSelectedCustomerType('Individual');
              navigate('/individual'); // Navigate to /individual
            }}
            className={`px-6 py-2 rounded-md font-semibold transition ${
              selectedCustomerType === 'Individual'
                ? 'bg-blue-800 text-white'
                : 'bg-blue-200 text-gray-800 hover:bg-blue-800'
            }`}
          >
            Individual
          </button>

          <button
            type="button"
            onClick={() => {
              setSelectedCustomerType('Organization');
              
              navigate('/organization'); // Navigate to /organization
            }}
            className={`px-6 py-2 rounded-md font-semibold transition ${
              selectedCustomerType === 'Organization'
                ? 'bg-blue-800 text-white'
                : 'bg-blue-200 text-gray-800 hover:bg-blue-800'
            }`}
          >
            Organization
          </button>
        </div>
      </div>
)}


          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm bg-white rounded-lg shadow-md">
              <thead>
                {registerType === "Builders" ? (
                  <tr className="bg-gray-100 text-gray-700">
                    
                    <th className="border-b border-gray-300 px-4 py-3">ID</th>

                    <th className="border-b border-gray-300 px-4 py-3">
                      CreationDate
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      Skill
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      First Name
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      Last Name
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      National ID
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      Phone
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      Email
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      County
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      Sub County
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      Status
                    </th>
                  </tr>
                ) : (
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="border-b border-gray-300 px-4 py-3">ID</th>
                    {/* <th className="border-b border-gray-300 px-4 py-3">C-ID</th> */}
                    <th className="border-b border-gray-300 px-4 py-3">
                      CreationDate
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      Customer Type
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      First Name
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      Last Name
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      National ID
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      Phone
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      Email
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      County
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      Sub County
                    </th>
                    <th className="border-b border-gray-300 px-4 py-3">
                      Status
                    </th>
                  </tr>
                )}
              </thead>
              <tbody>
                {registerType === "Builders" &&
                  (filteredBuilders.length > 0 ? (
                    filteredBuilders.map((builder) => (
                      <tr
                        key={builder.id}
                        className="border-b border-gray-200 hover:bg-gray-50 transition"
                      >
                       
                        <td className="px-4 py-3">{builder.id}</td>

                        <td className="px-4 py-3">{builder.creationDate}</td>

                        <td className="px-4 py-3">{builder.skill}</td>
                        <td className="px-4 py-3">{builder.firstName}</td>
                        <td className="px-4 py-3">{builder.lastName}</td>
                        <td className="px-4 py-3">1234567890</td>
                        <td className="px-4 py-3">0740189463</td>
                        <td className="px-4 py-3">example@gmail.com</td>
                        <td className="px-4 py-3">Nairobi</td>
                        <td className="px-4 py-3">Westlands</td>
                        <td className="px-4 py-3">Active</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="12"
                        className="text-center py-4 text-gray-500"
                      >
                        No builders found.
                      </td>
                    </tr>
                  ))}

                {registerType === "Customers" &&
                  (filteredCustomers.length > 0 ? (
                    filteredCustomers.map((customer) => (
                      <tr
                        key={customer.id}
                        className="border-b border-gray-200 hover:bg-gray-50 transition"
                      >
                        
                        <td className="px-4 py-3">{customer.id}</td>
                        {/* <td className="px-4 py-3">
                          C-{String(customer.id).padStart(3, "0")}
                        </td> */}
                        <td className="px-4 py-3">{customer.creationDate}</td>
                        <td className="px-4 py-3">{customer.customerType}</td>
                        <td className="px-4 py-3">{customer.firstName}</td>
                        <td className="px-4 py-3">{customer.lastName}</td>
                        <td className="px-4 py-3">{customer.nationalId}</td>
                        <td className="px-4 py-3">{customer.phone}</td>
                        <td className="px-4 py-3">{customer.email}</td>
                        <td className="px-4 py-3">{customer.county}</td>
                        <td className="px-4 py-3">{customer.subCounty}</td>
                        <td className="px-4 py-3">Active</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="12"
                        className="text-center py-4 text-gray-500"
                      >
                        No customers found.
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
