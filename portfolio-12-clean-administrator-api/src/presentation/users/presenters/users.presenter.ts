// Domain
import { User } from 'src/domain';

// Infrastructure
import { PresenterSwagger } from 'src/infrastructure';

export class UserPresenter {
  @PresenterSwagger({ required: true, description: 'User id' })
  _id: string;

  @PresenterSwagger({ required: true, description: 'User first name' })
  firstName: string;

  @PresenterSwagger({ required: true, description: 'User last name' })
  lastName: string;

  constructor(user: User) {
    this._id = user._id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }
}
