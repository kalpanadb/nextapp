// import CustomerStateProvider, { UseDeleteCustomer } from '@/hooks/useCustomer1';
// import React from 'react'

// export const CustomerDelete = () => {
//     const {
//         selectedCustomer,
//         customerDeleteClick
//     } = CustomerStateProvider();

//     const { mutate } = UseDeleteCustomer();
//     const handleDelete = () => {
//         if (selectedCustomer) {
//             customerDeleteClick(selectedCustomer.id);
//             mutate(selectedCustomer.id);
//         }
//     };
//     return (
//         <>
//             <h1>Delete Page</h1>
//             {selectedCustomer && (
//                 <div>
//                     <p>
//                         Are you sure you want to delete {selectedCustomer.name}?
//                     </p>
//                     <button onClick={handleDelete}>Delete</button>
//                 </div>
//             )}
//         </>
//     );
// }
