import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "axios";
import Cookies from "js-cookie";
import toastAxiosError from "@/lib/services/toastAxiosError";

export function useSendFeedback() {
    const mutation = useMutation({
        mutationFn: async (formData: FormData) => {
            return await axios.post(`/api/auth/add-feedback/`, formData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "X-CSRFToken": Cookies.get("csrftoken"),
                },
            });
        },
        onSuccess: () => {
            toast.success("Thanks for Submitting your Feedback!");
        },
        onError: (error) => {
            toastAxiosError(error);
        },
    });

    return mutation;
}
