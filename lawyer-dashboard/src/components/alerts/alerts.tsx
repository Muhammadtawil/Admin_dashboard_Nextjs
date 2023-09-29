import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const successAlert = () => {
  MySwal.fire({
    title: "Done!",
    text: "New Task Added",
    icon: "success",
    timer: 3000,
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
  }).then((result) => {
    if (result.isConfirmed) {
      deleteMethod;
      Swal.fire("Deleted!", "Your task has been deleted.", "success");
    }
  });
};
