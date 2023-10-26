

export function getStatusTranslationKey(status: any) {

    switch (status) {
        case "COMPLETED":
            return "completed";
        case "NOT_COMPLETED":
            return "notCompleted";
        case "IN_PROGRESS":
            return "inProgress";
        case "PENDING":
            return "pending";
        case "HIGH":
            return "high";
        case "MEDIUM":
            return "medium";
        case "LOW":
            return "low";
        case "yes":
            return "yes";
        case "no":
            return "no";
        case "ADMIN":
            return "admin";
        case "USER":
            return "user";
            case "AVAILABLE":
                return "available";
            case "NOT_AVAILABLE":
                return "notAvailable";
    


        default:
            return "no Status"; // Use a fallback key or handle this case as needed
    }
}



export function getPriorityTranslationKey(status: any) {

    switch (status) {
        case "COMPLETED":
            return "completed";
        case "NOT_COMPLETED":
            return "notCompleted";
        case "IN_PROGRESS":
            return "inProgress";
        default:
            return "no Status"; // Use a fallback key or handle this case as needed
    }
}
