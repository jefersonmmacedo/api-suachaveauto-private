import { Evaluation } from "../../models/Evaluation";
import { IEvaluationRepository, IEvaluationDTO } from "../IEvaluationRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class EvaluationRepository implements IEvaluationRepository {
  private evaluation: Evaluation[];

  private static INSTANCE: EvaluationRepository;

  private constructor() {
    this.evaluation = [];
  }

  public static getInstance(): EvaluationRepository {
    if (!EvaluationRepository.INSTANCE) {
      EvaluationRepository.INSTANCE = new EvaluationRepository();
    }

    return EvaluationRepository.INSTANCE;
  }
 
  async create({ 
    id, idCompany, idClient, title, description, type, subType, status, road, district, city, uf, bedroom, garage, suite, restroom,
    furnished, pets, characteristcs, images, featuredImage, name, email, phone, whatsapp,  
  }: IEvaluationDTO) {
    const evaluation: Evaluation = new Evaluation();
      Object.assign(evaluation, {
        id: `imob-${id}`, _id: `imob-${id}`, idCompany, idClient, title, description, type, subType, status,  road, district, city, uf, bedroom, garage, suite, restroom,
        furnished, pets, characteristcs, images, featuredImage, name, email, phone, whatsapp, created_at: new Date(),
      });
      this.evaluation.push(evaluation);
      
      await collections.evaluation.insertOne(evaluation).then((result) => {
        console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }

  list(){ }

  async delete({id}) {
    await collections.evaluation.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

}

export { EvaluationRepository };




