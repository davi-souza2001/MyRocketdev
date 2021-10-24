import styles from "../styles/ModalEditProfile.module.css";

interface ModalEditProfile {
    
}

export default function ModalEditProfile(props: ModalEditProfile){
    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentForms}>
                <form>
                <input required type="text" placeholder="Digite seu nome publico" />
                    <input required type="text" placeholder="Digite seu @ no qual as pessoas vão procurar você"  />
                    <input type="text" placeholder="Digite seu @ no Linkedin"  />
                    <input required type="text" placeholder="Digite seu @ no Github"  />
                    <input type="text" placeholder="Digite seu @ no Instagram" />
                    <input type="text" placeholder="Digite seu @ no Youtube"  />
                    <select required >
                        <option selected >--Senioridade--</option>
                        <option value="Front-End">Front-End</option>
                        <option value="Back-End">Back-End</option>
                        <option value="Full-Stack">Full-Stack</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Dados">Dados</option>
                        <option value="IOS">IOS</option>
                        <option value="Android">Android</option>
                    </select>
                    <select required >
                        <option selected>--Front-End--</option>
                            <option value="React">ReactJs</option>
                            <option value="Angular">AngularJs</option>
                            <option value="Vue">Vuejs</option>
                            <option value="Next">NextJs</option>
                            <option value="Ember">Ember</option>
                        <option selected>--Back-End--</option>
                            <option value="Node">NodeJs</option>
                            <option value="Mongo">MongoDb</option>
                            <option value="Sql">Sql</option>
                            <option value="Firebase">Firebase</option>
                            <option value="CSharp">CSharp</option>
                            <option value="Java">Java</option>
                        <option selected>--Mobile--</option>
                            <option value="React-Native">React-Native</option>
                            <option value="Flutter">Flutter</option>
                            <option value="Swift">Swift</option>
                            <option value="Ionic">Ionic</option>
                    </select>
                    <select required >
                        <option  selected>--Front-End--</option>
                            <option value="React">ReactJs</option>
                            <option value="Angular">AngularJs</option>
                            <option value="Vue">Vuejs</option>
                            <option value="Next">NextJs</option>
                            <option value="Ember">Ember</option>
                        <option  selected>--Back-End--</option>
                            <option value="Node">NodeJs</option>
                            <option value="Mongo">MongoDb</option>
                            <option value="Sql">Sql</option>
                            <option value="Firebase">Firebase</option>
                            <option value="CSharp">CSharp</option>
                            <option value="Java">Java</option>
                        <option  selected>--Mobile--</option>
                            <option value="React-Native">React-Native</option>
                            <option value="Flutter">Flutter</option>
                            <option value="Swift">Swift</option>
                            <option value="Ionic">Ionic</option>
                    </select>
                    <select required >
                        <option  selected>--Front-End--</option>
                            <option value="React">ReactJs</option>
                            <option value="Angular">AngularJs</option>
                            <option value="Vue">Vuejs</option>
                            <option value="Next">NextJs</option>
                            <option value="Ember">Ember</option>
                        <option  selected>--Back-End--</option>
                            <option value="Node">NodeJs</option>
                            <option value="Mongo">MongoDb</option>
                            <option value="Sql">Sql</option>
                            <option value="Firebase">Firebase</option>
                            <option value="CSharp">CSharp</option>
                            <option value="Java">Java</option>
                        <option  selected>--Mobile--</option>
                            <option value="React-Native">React-Native</option>
                            <option value="Flutter">Flutter</option>
                            <option value="Swift">Swift</option>
                            <option value="Ionic">Ionic</option>
                    </select>
                    <input required type="text" placeholder="Adicione uma descrição sobre você" />
                    <input required type="text" placeholder="De qual estado você é ?" />
                    <button type="submit">Editar</button>
                </form>
            </div>
        </div>
    )
}
