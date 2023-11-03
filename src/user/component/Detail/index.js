import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Info from "./Info";
import Property from "./Property";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { fetchRoomDetail } from "user/redux/roomSlice";
import { Helmet } from "react-helmet";
import { truncateWords } from "user/utils/libs";
import isEmpty from "lodash/isEmpty";

const RoomDetail = () => {
  const dispatch = useDispatch();
  const { roomDetail, loading } = useSelector((state) => state?.roomSlice);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchRoomDetail(id));
  }, [dispatch, id]);

  if (loading) {
    return <LoadingOutlined />;
  }

  return (
    <article className="container px-4 mx-auto py-6 lg:py-10">
      {!isEmpty(roomDetail) && (
        <Helmet>
          <title>{truncateWords(roomDetail?.tenPhong, 10)}</title>
          <meta name="description" content={roomDetail?.moTa} />
        </Helmet>
      )}
      <Info data={roomDetail} />
      <Property data={roomDetail} />
    </article>
  );
};

export default React.memo(RoomDetail);
