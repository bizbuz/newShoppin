import { houseModel } from '../../controllers/houselist';

function GetById(id){
  //express call to url
  //that will do an axios get call
  return houseModel.filter(house => id === house.id);
}

export {GetById};