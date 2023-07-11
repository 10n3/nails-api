import {User} from "../user/user.model";

interface RequestWithUser extends Request {
    user: User;
}

export default RequestWithUser;