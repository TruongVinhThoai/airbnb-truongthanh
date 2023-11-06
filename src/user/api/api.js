import { dateFromIsoString } from "user/utils/libs";
import { https } from "./config";

export const userServ = {
  login: (info) => https.post(`/auth/signin`, info),
};
export const getRoomsData = () => https.get("/phong-thue");
export const getDetaiRoomData = ({ id }) => https.get(`/phong-thue/${id}`);
export const postBookingRoom = async ({
  maPhong,
  ngayDen,
  ngayDi,
  soLuongKhach,
  maNguoiDung,
}) => {
  return https.post("dat-phong", {
    maPhong,
    ngayDen: dateFromIsoString(ngayDen),
    ngayDi: dateFromIsoString(ngayDi),
    soLuongKhach,
    maNguoiDung,
  });
};
