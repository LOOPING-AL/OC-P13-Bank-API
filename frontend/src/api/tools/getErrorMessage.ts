import { MessageError } from "../../global";

const getErrorMessage = (response: any) => {
  switch (response.status) {
    case 400: {
      switch (response.message) {
        case "Error: User not found!": {
          return MessageError.BAD_EMAIL;
        }

        case "Error: Password is invalid": {
          return MessageError.BAD_PASSWORD;
        }

        default: {
          return MessageError.BAD_CREDENTIALS;
        }
      }
    }
    case 401: {
      return MessageError.BAD_ROUTE;
    }

    default: {
      return `${MessageError.RETRY} ${response.status})`;
    }
  }
};

export default getErrorMessage;
