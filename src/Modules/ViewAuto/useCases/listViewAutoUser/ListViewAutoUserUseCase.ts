import { collections } from "../../../../../services/database.service";
import { ViewAuto } from "../../models/ViewAuto";
import { IViewAutoRepository } from "../../repositories/IViewAutoRepository";

class ListViewAutoUserUseCase {
  constructor(private ViewAutoRepository: IViewAutoRepository) {
    " ";
  }

  async execute() {
   const ViewAuto = await collections.viewAuto.find({});
   const ViewAutoAll = ViewAuto.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(ViewAutoAll)
        }
  }

export { ListViewAutoUserUseCase };
