import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


export function successAlert (succesTitle: string){
 return Swal.fire({
    title: "Done!",
    text: `${succesTitle}`,
    icon: "success",
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

export const updateAlert = (updateTitle: string) => {
  Swal.fire({
    title: "Done!",
    text:`${updateTitle}`,
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

export const AssignTaskAlert = () => {
  Swal.fire({
    title: "Done!",
    text: " Task Assigned",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

export const deleteAlert =async({ deleteMethod }: any) => {
  return await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    focusConfirm: true,
    allowEscapeKey:true
    
  }).then((result) => {
    if (result.isConfirmed && result.value === true) {
      console.log(result)
 deleteMethod();
      Swal.fire("Deleted!", "Your task has been deleted.", "success");
    }
  });
};

export const LoginAlert = ({ userName }: any) => {
  Swal.fire({
    title: "Welcome!",
    text: `you are welcome ${userName}`,
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};
