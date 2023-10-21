import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export function successAlert (succesTitle: string){
 return MySwal.fire({
    title: "Done!",
    text: `${succesTitle}`,
    icon: "success",
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

export const updateAlert = (updateTitle: string) => {
  MySwal.fire({
    title: "Done!",
    text:`${updateTitle}`,
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

export const AssignTaskAlert = () => {
  MySwal.fire({
    title: "Done!",
    text: " Task Assigned",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

export const deleteAlert = ({ deleteMethod }: any) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    focusConfirm:true
  }).then((result) => {
    if (result.isConfirmed ) {
deleteMethod();
      Swal.fire("Deleted!", "Your task has been deleted.", "success");
    }
  });
};

export const LoginAlert = ({ userName }: any) => {
  MySwal.fire({
    title: "Welcome!",
    text: `you are welcome ${userName}`,
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};
