import { combineReducers } from "@reduxjs/toolkit";
import courReducer from "./modules/Cour";
import bookReducer from "./modules/Book";
import userReducer from "./modules/User";
import authReducer from "./modules/Auth";
import exerciceReducer from "./modules/Exercice";
import quizReducer from "./modules/Quiz";
import subjectReducer from "./modules/Subject";
import bookFavReducer from "./modules/BookFav";
import bookTypeReducer from "./modules/BookType";
import repetitionReducer from "./modules/Repetition";
import userRepetReducer from "./modules/UserRepet";
import sousTitreReducer from "./modules/SousTitre";
import classroomReducer from "./modules/Classroom";


export default combineReducers({
    auth:authReducer,
    cours:courReducer,
    books:bookReducer,
    users:userReducer,
    exercices:exerciceReducer,
    quizs:quizReducer,
    subjects:subjectReducer,
    booksFavs:bookFavReducer,
    booksTypes:bookTypeReducer,
    repetitions:repetitionReducer,
    userRepets:userRepetReducer,
    sousTitres:sousTitreReducer,
    classrooms:classroomReducer,
})