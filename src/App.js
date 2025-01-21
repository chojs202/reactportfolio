import styled from "styled-components";
import { FaUser, FaCalendar, FaPhoneAlt, FaPen, FaLaptopCode, FaServer  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiFileHtmlBold } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import Netflix1 from "../src/img/netflix/netflix1.jpeg"
import Netflix2 from "../src/img/netflix/netflix2.jpeg"
import Netflix3 from "../src/img/netflix/netflix3.jpeg"
import Netflix4 from "../src/img/netflix/netflix4.jpeg"
import todo1 from "../src/img/todoapp/todo1.png"
import todo2 from "../src/img/todoapp/todo2.png"
import todo3 from "../src/img/todoapp/todo3.png"
import todo4 from "../src/img/todoapp/todo4.png"
import wetube1 from "../src/img/wetube/wetube1.png"
import wetube2 from "../src/img/wetube/wetube2.png"
import wetube3 from "../src/img/wetube/wetube3.png"
import wetube4 from "../src/img/wetube/wetube4.png"



const Main1 = styled.div`
  width: 100%;
  max-width: 81.25rem;
  margin: 0 auto;
  padding: 8.5rem 1.5rem 4rem;
  text-align: center;
  background-color:rgba(199, 188, 188, 0.2);
  div{
    width: 100%;
    max-width: 81.25rem;
    margin: 0 auto;
    padding: 20px 50px;
    text-align: center;
  }
  
  h1 {
    padding:20px;
    font-size: 4rem;
    line-height: 1.25;
    word-break: keep-all;
    
  }
  h3{
    margin: 0 auto 2rem;
    font-size: 1.25rem;
    line-height: 1.5;
    
  }
`;
const Title = styled.h1`
    border-bottom-width: 1px;
    border-bottom-style: solid;
    font-size: 45px;
    text-align: center;
    padding-bottom:5px;
    margin:20px;

`;
const Main2 = styled.div`
  display:flex;
  flex-direction:column;
  padding: 0px 20px 50px 20px;
  justify-content: center;
  align-items:center;
  width:100%;
  height:300px;
  padding:10px;
  
  
`;
const Aboutme = styled.div`
    display: flex;
    justify-content: space-between;
    row-gap: 30px;
    flex-wrap: wrap;
    flex-direction: row;
    padding:30px;
   

`;
const Aboutmesmall = styled.div`
  display:flex;
  align-items:center;
  width: 33.33333333%;
 
  margin: 0 auto;
  opacity: .8;

svg{
  font-size:30px;
  padding-right:10px;
  
}

   
   
`;

const Aboutname = styled.div`
  display:block;
  justify-content:center;
  align-items:center;
  padding-left:10px;
  
  div:first-child {
    font-size:15px;
    font-weight:400;
    padding-bottom:3px;

  }
  
  div:last-child {
    div:first-child{
      font-size:14px;
    }
    font-size:14px;
    color:rgba(0,0,0,0.5);
    
  }
  

`;

const Main3 = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  height:300px;
  background-color:gray;
  max-width: 71.25rem;
  padding: 4rem 6.5rem;
  margin: 0 auto;
  border-radius:50px;
  box-shadow: 0 0 .5rem 0 rgba(68, 68, 68, .7);

`;

const SkillTool = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding: 2rem;
    background-color: hsla(0, 0%, 100%, .8);
    box-shadow: 1rem 1rem 1rem 0 rgba(68, 68, 68, .2);
    border-radius: 1rem;
  
`;

const SkillList = styled.div`
    display: flex;
    

`;

const SkillName = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    flex-shrink: 0;
    width: 10rem;
    font-weight: 900;
    font-size:20px;
`;

const SkillUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: .5rem;
  li{
    background-color: #2f74c0;
    color: #ffffff;
    padding: .25rem .75rem;
    border-radius: .5rem;
    font-weight: 500;
    font-size: .875rem;
  }
`;







const Main4 = styled.div`


`;
const Main4Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    background-color: #F5F5F5;
    height:70%;
    width: 100%;
    max-width: 81.25rem;
    padding: 4rem 1.5rem;
    margin: 0 auto;
    

`;
const Projects = styled.div`
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content:center;
    align-items:center;
`;

const Project = styled.div`
  width:80%;
  height:1000px;
  background-color:white;
  color:black;
  text-align:center;
  border-radius:50px;
  box-shadow: 0 0 .5rem 0 rgba(68, 68, 68, .7);
 
`;


const ProjectTitle = styled.h1`
  margin:30px 30px 60px 30px;
  font-size:30px;
`;
const ProjectElement = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;

`;
const ProjectEx = styled.div`
  margin-left:20px;
  height:70%;
  width:50%;
  font-size:20px;
  display:flex;
  text-align:left;
  flex-direction:column;
  
  
  

`;

const ProjectExex = styled.div`
  line-height:35px;
  margin-bottom:20px;
  h1{
    font-size:25px;
    width:90%;
    color:white;
    background-color:red;
    height:35px;
    padding:5px 5px 5px 15px;
    border-radius:15px;
  }
  h2{
    font-size:18px;
  }
  h3{
    font-size:14px;
  } 
  div{
    background-color:#FEF3D2;
    border: 1px solid #f9c51d;
    padding:7px 7px 7px 20px; ;
    border-radius:5px;
    margin-top:15px;
    font-size:15px;

  }
  a{
    border-left: 4px solid #258ddb;

    padding-left: .75rem;
  }
  

`;

const ProjectPhoto = styled.div`
  width:50%;
  img {
    height:200px;
    width:300px;
  }
`;




function App() {
  
  return (
    <div>
    <Main1>
      <div>
        <h1>- Jo Seong Jun -<br/>Frontend Portfolio</h1>
        <h3>こんにちは <br/>新しいことを楽しんで挑戦に恐れない<br/>開発者のJo Seong Junです。</h3>
       
      </div>
    </Main1>
    <Main2>
      <div>
        <Title>
        ABOUT ME
        </Title>
      </div>
      <Aboutme> 
        <Aboutmesmall> 
          <FaUser />
          <Aboutname>
            <div>名前</div>
            <div>チョ・ソンジュン</div>
          </Aboutname>
       
        </Aboutmesmall>
        <Aboutmesmall> 
          <FaCalendar />
          <Aboutname>
            <div>生年月日</div>
            <div>91. 08 .15</div>
          </Aboutname>
       
        </Aboutmesmall>
        <Aboutmesmall> 
          <FaLocationDot />
          <Aboutname>
            <div>Location</div>
            <div>Korea. Ulsan</div>
          </Aboutname>
       
        </Aboutmesmall>
        <Aboutmesmall> 
          <FaPhoneAlt />
          <Aboutname>
            <div>携帯電話</div>
            <div>+82 10-4998-6140</div>
          </Aboutname>
       
        </Aboutmesmall>
        <Aboutmesmall> 
          <IoMdMail />
          <Aboutname>
            <div>E - Mail</div>
            <div>amazon202@naver.com</div>
          </Aboutname>
       
        </Aboutmesmall>
        <Aboutmesmall> 
          <FaPen />
          <Aboutname>
            <div>学歴</div>
            <div>
              <div>韓国教育振興院</div>
              <div>4年制コンピューター工学部</div>
            </div>
            
          </Aboutname>
       
        </Aboutmesmall>
        
        
      </Aboutme>
    </Main2>
    <Main3>
      <div>
        <Title>
          SKILL
        </Title>
        <SkillTool>
          <SkillList>
              <SkillName>
                <FaLaptopCode />Language</SkillName>
              <SkillUl>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </SkillUl>
          </SkillList>
          
          <SkillList>
              <SkillName>
                <PiFileHtmlBold />Frontend</SkillName>
              <SkillUl>
                <li>React</li>
                <li>Recoil</li>
                <li>React Query</li>
                <li>React-Hook-Form</li>
                <li>Styled Components</li>
              </SkillUl>
          </SkillList>

          <SkillList>
              <SkillName>
                <FaServer />Backend</SkillName>
              <SkillUl>
                <li>Node JS</li>
                <li>Express</li>
                <li>MongoDB</li>
              </SkillUl>
          </SkillList>
          
          
        </SkillTool>
      </div>
      
    </Main3>
    <Main4>
      <Main4Div>
        <Title>PROJECTS</Title>
        <Projects>
          <Project>
            <ProjectTitle>YouTube Clone FullStack</ProjectTitle>
            <ProjectElement>
              <ProjectEx>
                <ProjectExex>
                  <h1>YouTube Clone App</h1>
                  <br/>
                  <br/>
                  <h3>
                  FrontEnd: HTML5, CSS3, JavaScript <br/>
                  BackEnd: NodeJS. MongoDB, Express<br/>
                  JS Full Stackをvanilla JSとNode JSの組み合わせで開発。<br/>
                  会員登録時にEmailとIDを有効性検査で重複を防止。<br/>
                  Mongooseを利用したモデル生成とCRUD動作<br/>
                  express-sessionの ライブラリ を使って<br/> 
                  sessionとcookieを利用してサーバーとユーザー間の<br/>
                  ユーザー識別と認証を可能にして、実際のデータを生成したユーザーだけ本人のデータ管理が可能。<br/>
                  データベースは,NoSQLベースのMongDBを利用して管理。<br/>


                  
                  <br/>
                  
                  
                  </h3>
                  <div>Vanila JS, Node JS, Express, MongoDB, Mongoose, NoSQL, Pug </div>
                  <br/>
                  <a href="https://wetube-reload-2024-seongjun.fly.dev/">Open The WeTube App</a>
                  <br/>
                  <a href="https://github.com/chojs202/wetube-reloaded/blob/master/README.md"> プロジェクト 詳細説明 📘</a>
                </ProjectExex>
                
              </ProjectEx>
              <ProjectPhoto>
              <img src={wetube1} alt="can't read img" />
              <img src={wetube2} alt="can't read img" />
              <img src={wetube3} alt="can't read img" />
              <img src={wetube4} alt="can't read img" />
              </ProjectPhoto>
            </ProjectElement>
          </Project>
          <Project>
            <ProjectTitle>To Do App</ProjectTitle>
            <ProjectElement>
              <ProjectEx>
                <ProjectExex>
                  <h1>To Do App</h1>
                  <br/>
                  <br/>
                  <h2>Reactで 実現した To Do List </h2>
                  <h3>TypeScriptベースのReactAppです
                   <br/>
                  Reactの多様なライブラリの使用に焦点を当てました。<br/>
                  RecoilのAtomを利用して状態管理をしました。<br/>
                  React Hook Formを利用して入力フォームをBuildして<br/>
                  検証することを具現化しました。<br/>
                  React-Beautiful-dndを活用して<br/>
                  Drag and Drop形式のフォームを作りました。<br/>
                  データ生成と移動、そして削除機能を具現して<br/>
                  データはLocal Storageを利用してKey-value値を保存した後,<br/>
                  UserがBrowserを終了してもデータを維持できるようにしました。<br/>
                  
                  </h3>
                  <div>React, TypeScript, Recoil, React Beautiful-dnd, styled-components </div>
                  <br/>
                  <a href="https://chojs202.github.io/todoapp/">Open The To Do App</a>
                  <br/>
                  <a href="https://github.com/chojs202/todoapp/blob/main/README.md">プロジェクト 詳細説明 📘</a>
                </ProjectExex>
                
              </ProjectEx>
              <ProjectPhoto>
              <img src={todo1} alt="can't read img" />
              <img src={todo2} alt="can't read img" />
              <img src={todo3} alt="can't read img" />
              <img src={todo4} alt="can't read img" />
              </ProjectPhoto>
            </ProjectElement>
          </Project>
          <Project>
            <ProjectTitle>Movie App Netflix</ProjectTitle>
            <ProjectElement>
              <ProjectEx>
                <ProjectExex>
                  <h1>NetFlix Movie App</h1>
                  <br/>
                  <br/>
                  <h3>TypeScriptベースのReactで実装された App </h3>
                  <h3>
                  Reactの多様なライブラリの使用に焦点を当てました。<br/>
                  Movie Apiを利用して一番人気の上位20のMovie and Tv Show <br/>
                  そしてSearchで検索したKeywordと同じか似たような <br/>
                  一番近い映画とtv Showを見せてくれるMovieアプリを作りました。.<br/>
                  TypeScriptを使用してUserの安定性を高めました。<br/>
                  SPAユーザー経験向上のためにReactRouterDomを利用して経路指定をしました。<br/>
                  そしてFramer-motionを利用してSlider Bar and ModalなどCSS Animationを実現しました。<br/>
                  
                  </h3>
                  <div>React, TypeScript, React Query, React Router,Framer Motion, Styled-Components </div>
                  <br/>
                  <a href="https://chojs202.github.io/react-netflix/">Open The NetFlix App</a>
                  <br/>
                  <a href="https://github.com/chojs202/netflixCode/blob/main/README.md">プロジェクト 詳細説明 📘</a>
                </ProjectExex>
                
              </ProjectEx>
              <ProjectPhoto>
                <img src={Netflix1} alt="can't read img" />
              <img src={Netflix2} alt="can't read img" />
              <img src={Netflix3} alt="can't read img" />
              <img src={Netflix4} alt="can't read img" /></ProjectPhoto>
            </ProjectElement>
          </Project>
        </Projects>
      </Main4Div>

    </Main4>
    </div>
  );
}

export default App;
