import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetUserByIdQuery,
  useLazyCurrentQuery,
  useLazyGetUserByIdQuery,
} from "../../app/services/userApi"
import { useDispatch, useSelector} from "react-redux"
import { resetUser, selectCurrent } from "@nextui-org/react"
import { Button, Card, Image } from "@nextui-org/react"
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { MdOutlinePersonAddDisabled } from "react-icons/md";
import { useDisclosure } from "@nextui-org/react";
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from "../../app/services/followApi"
import { GoBack } from "../../components/go-back"
import { BASE_URL } from "../../constants";
import { CiEdit } from "react-icons/ci";
import { EditProfile } from "../../components/edit-profile"
import { formatToClientDate } from "../../utils/format-to-client-date";
import { ProfileInfo } from "../../components/profile-info"
import { CountInfo } from "../../components/count-info"

export const UserProfile = () => {
  const { id } = useParams<{ id: string }>()
  const { isOpen, on}
}


