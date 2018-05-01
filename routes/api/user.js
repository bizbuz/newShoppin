import { userModel } from '../../controllers/houselist';

function GetById(id){
  //express call to url
  //that will do an axios get call
  return userModel.filter(user => id === user.id);
}

export {GetById};