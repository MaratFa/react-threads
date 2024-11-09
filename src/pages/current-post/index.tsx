import { useParams } from "react-router-dom"
import { useGetPostByIdQuery } from "../../app/services/postsApi";
import { Card } from "../../components/card"
import { createComment } from "../../components/";



export const CurrentPost = () => {
  const params = useParams<{ id: string}>();
  const { data } = useGetPostByIdQuery(params?.id ?? "")

  if (!data) {
    return <h2>Пост не существует</h2>
  }
  
  const {
    content,
    id,
    authorId,
    comments,
    likedByUser
  }

  return <div>CurrentPost</div>
}
