import React, { useState } from 'react'
import post1 from '../../assets/p1.svg'
import post2 from '../../assets/p2.svg'
import post3 from '../../assets/p3.svg'
import { AiFillLike } from "react-icons/ai";
import { MdInsertComment } from "react-icons/md";

const Posts = () => {
    const posts = [1, 2, 3]
    const [commentInputs, setCommentInputs] = useState({});

    return (
        <div className=''>

            <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
                {posts?.length > 0 ? (
                    posts?.map((idea) => (
                        <div className="bg-white mb-6 rounded border border-white shadow p-4" key={idea?.campaignId}>
                            <div className="flex items-center justify-between text-[#7F7F7F]">
                                <div className="flex items-center">
                                    <p className="w-[64px] h-[64px] bg-[#7F7F7F] rounded-full flex items-center justify-center text-white font-semibold text-2xl">
                                        JL
                                    </p>
                                    <div className="px-3 flex flex-col">
                                        <p className="text-[#111111] font-semibold">
                                            {idea?.createdBy ?? 'AMAKA NWANZE'}
                                        </p>
                                        <p className="text-[#111111] text-xs font-light">
                                            {idea?.postedDate ?? '28 Jan 2024'}
                                        </p>
                                    </div>
                                </div>
                                <p></p>
                            </div>
                            <div className="grid grid-cols-12 gap-2  mt-4">
                                <div className="col-span-7">
                                    <img src={post1} alt='post_img' className="object-cover w-full h-full" />
                                </div>
                                <div className="col-span-5  flex">
                                    <div className="flex-1 grid grid-cols-1 gap-2">
                                        <div className="h-full">
                                            <img src={post2} alt='post_img' className="object-cover w-full h-full" />
                                        </div>
                                        <div className="h-full">
                                            <img src={post3} alt='post_img' className="object-cover w-full h-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="font-normal text-[#7F7F7F] mb-6 mt-4 text-[12px] font-medium">
                                {idea?.details ?? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac est ex. Suspendisse sit amet dui sit amet quam maximus accumsan a non nisi. Praesent velit lorem, dictum sit amet turpis pharetra, fermentum consequat odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec consequat urna vitae est tincidunt, at posuere ipsum consequat. Sed a mollis diam. Nam tristique dolor quis aliquam scelerisque. Ut pellentesque ligula lorem, vitae viverra lectus cursus id. Sed a tincidunt augue, tempor scelerisque enim. Pellentesque scelerisque, dolor nec vulputate venenatis, eros ipsum pellentesque felis, id varius orci sem et lorem. In ultrices, nulla quis porttitor posuere, elit velit eleifend lorem, vitae pharetra quam erat non elit. Nulla non orci sagittis, sagittis arcu sed, tempor quam.'}
                            </div>
                            <div className="flex items-center justify-around border-t border-b border-gray-400 p-2">
                                <div
                                    className="flex items-center text-red-600 cursor-pointer"
                                // onClick={() => likePost(idea)}
                                >
                                    <span>
                                        <AiFillLike />
                                    </span>
                                    <p className="mx-2">Like</p>
                                </div>
                                <div className=" flex items-center" onClick={() => postComment(idea)}>
                                    <span className="mx-2">
                                        <MdInsertComment />
                                    </span>
                                    <p>Comment</p>
                                </div>
                            </div>
                            <div className="mt-6 font-medium text-lg">
                                All Comments ({idea?.commentsCount})
                            </div>
                            {idea?.comments?.length > 0 ? (
                                idea?.comments?.map((comment, index) => (
                                    <div className="flex items-center my-4 overflow-y-auto" key={index}>
                                        <div className="w-[53.5px] h-[53.5px] bg-[#7F7F7F] rounded-full flex items-center justify-center text-white font-semibold text-2xl">
                                            JL
                                        </div>
                                        <div className="flex flex-col mx-2">
                                            <p>{comment.commentedBy ?? 0}</p>
                                            <p className="font-normal text-xs py-2">
                                                {comment.comment}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="my-4">No comments here</div>
                            )}
                            <div>
                                <input
                                    className="appearance-none block w-full text-gray-700 rounded-full p-2.5 px-4 leading-tight focus:outline-none bg-[#F0F2F5]"
                                    placeholder="Write a comment"
                                    value={commentInputs[idea?.campaignId] || ""}
                                    onChange={(e) =>
                                        handleCommentChange(idea?.campaignId, e.target.value)
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            postComment(idea);
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No Campaigns</div>
                )}
            </div>
        </div>
    )
}

export default Posts