import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navbar from "./navbar";
import Modal from "../../components/Modal";
import Select from "react-select";
import { toast } from "react-toastify";
import { AiFillLike } from "react-icons/ai";
import { MdInsertComment } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import bolt from '../../assets/bolt.svg'
import coin from '../../assets/coin.svg'
import user_picture from '../../assets/user.svg'
import post1 from '../../assets/post_1.svg'
import post2 from '../../assets/post_2.svg'
import post3 from '../../assets/post_3.svg'
import upload from '../../assets/upload.svg'





const Employee = () => {
  const navigate = useNavigate();
  const apiURL = import.meta.env.VITE_REACT_APP_GET_IDEA_HUB_EMPLOYEE;
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const { handleSubmit } = useForm();
  const [initials, setInitials] = useState("");
  const [ideas, setIdeas] = useState([1, 2]);
  const [modal, setModal] = useState(false);
  const [campaignNames, setCampaignNames] = useState([]);
  const [selectedCampaignName, setSelectedCampaignName] = useState("");
  const [details, setDetails] = useState("");
  const [campaignCategory, setCampaignCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [additionalFields, setAdditionalFields] = useState([]);
  const [commentInputs, setCommentInputs] = useState({});
  const [likedCampaigns, setLikedCampaigns] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const [voteCount, setVoteCount] = useState(0);

  const handleAddField = () => {
    if (additionalFields.length < 5) {
      setAdditionalFields([...additionalFields, { value: "" }]);
    }
  };

  const handleInputChange = (index, event) => {
    const updatedFields = [...additionalFields];
    updatedFields[index] = { value: event.target.value };
    setAdditionalFields(updatedFields);
  };

  const handleSelectCampaignName = (selectedOption) => {
    setSelectedCampaignName(selectedOption);
  };

  const handleSelectCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  const handleSelectGroupChange = (selectedOption) => {
    setSelectedGroup(selectedOption);
  };

  const handleSelectBranchChange = (selectedOption) => {
    setSelectedBranch(selectedOption);
  };

  const handleCommentChange = (ideaId, value) => {
    setCommentInputs({ ...commentInputs, [ideaId]: value });
  };

  const getIdeas = () => {
    const url = `${apiURL}/GetApprovedCampaignsForAllEmployees`;
    axios.get(url).then((response) => {
      // setIdeas(response.data.responseValue);
    });
  };

  const getCampaignNames = () => {
    const url = `${apiURL}/GetCampaignTitleList`;
    axios.get(url).then((response) => {
      const campaignName = response.data.responseValue;
      const campaignNameValue = campaignName.map((campaign) => {
        return {
          value: campaign.CampaignId,
          label: campaign.CampaignName,
        };
      });
      setCampaignNames(campaignNameValue);
    });
  };

  const getCategories = () => {
    const url = `${apiURL}/GetCampaingnCategoryList`;
    axios.get(url).then((response) => {
      const category = response.data.responseValue;
      const categoryValue = category.map((cat) => {
        return {
          value: cat.CatergoryId,
          label: cat.CatergoryName,
        };
      });
      setCampaignCategory(categoryValue);
    });
  };

  const getDepartments = () => {
    const url = "http://192.168.207.18:8080/api/ActiveDirectory/GetDepartments";
    axios.get(url).then((response) => {
      const details = response.data.data;
      const group = details.map((dept) => {
        return { value: dept.email, label: dept.fullName };
      });
      setGroups(group);
    });
  };

  const getBranches = () => {
    const url = "http://192.168.207.18:8077/api/Branches/GetBranches";
    axios.get(url).then((response) => {
      const details = response.data.data;
      const branch = details.map((branch) => {
        return { value: branch.branchCode, label: branch.branchName };
      });
      setBranches(branch);
    });
  };

  useEffect(() => {
    const _initials = user?.name
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join("");
    setInitials(_initials);
    getIdeas();
    getCategories();
    getDepartments();
    getBranches();
    getCampaignNames();
  }, []);

  const postCampaign = () => {
    const url = `${apiURL}/PostNewCampaign`;
    const payload = {
      details: details,
      campaignName: selectedCampaignName.label,
      campaignId: selectedCampaignName.value,
      campaignCategory: selectedCategory.label,
      groupOwner: selectedGroup.label,
      createdBy: `${user.givenname}@premiumtrustbank.com`,
      initiatorBranch: selectedBranch.label,
      keyFeatures: additionalFields.map((field) => field.value),
    };
    axios.post(url, payload).then((response) => {
      toast.success(response.data.responseMessage);
    });
  };

  const postComment = (idea) => {
    const url = `${apiURL}/AddNewCommentOnCampaign`;
    const payload = {
      campaignId: idea.campaignId,
      comment: commentInputs[idea.campaignId],
      commentedBy: user.name,
    };
    axios.post(url, payload).then((response) => {
      toast.success(response.data.responseMessage);
      setCommentInputs({ ...commentInputs, [idea.campaignId]: "" });
    });
  };

  const likePost = (idea) => {
    const id = idea.campaignId;
    const url = `${apiURL}/IncreaseCampaignLikesCount?campaignId=${id}`;
    axios.get(url).then((response) => {
      toast.success(response.data.responseMessage);
      if (likedCampaigns.includes(id)) {
        setLikedCampaigns(
          likedCampaigns.filter((campaignId) => campaignId !== id)
        );
      } else {
        setLikedCampaigns([...likedCampaigns, id]);
      }
      setVoteCount((prevCount) => prevCount + 1);
    });
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar onLogout={handleLogout} />
      <div className="bg-[#F2F3F5] w-full py-[130px]">
        <div className="  w-[90%] mx-auto">
          <div className="w-full h-screen grid grid-cols-12 gap-8">
            <div className="col-span-3 h-[600px] bg-white rounded-xl  flex flex-col items-center justify-center gap-10 p-7">
              <div className="flex flex-col items-center justify-center">
                <div className="w-[83px] h-[83px] rounded-full bg-[#E43625] text-white text-[38px] flex items-center justify-center font-semibold">
                  {initials ?? 'AN'}
                </div>
                <p className="py-2 font-semibold text-[18.11px] text-[#232323]">{user?.name ?? 'Amaka Nwanze'}</p>
                <p className="text-[#76777E] font-medium font-avenir text-[10.63px] mb-6">{user?.role ?? 'Group head of Digital Branding'}</p>
                <div className="border border-primary rounded-[5px] text-primary text-[12.68px] font-medium px-8 text-center py-3 mb-4">
                  User
                </div>
                <div className="flex items-center justify-between my-4 w-full">
                  <div className="">
                    <p className="text-[14.49px] font-semibold text-center">{postCount ?? 0}</p>
                    <p className="text-center text-[10.87px] font-medium text-[#232323]">Posts</p>
                  </div>
                  <div className='h-[3.62px] w-[3.62px] bg-[#6D6C76] rounded-full' />
                  <div>
                    <p className="text-[14.49px] font-semibold text-center">{postCount ?? 0}</p>
                    <p className="text-center text-[10.87px] font-medium text-[#232323]">Votes</p>
                  </div>
                </div>
                <div className="text-center my-3">
                  <p className="text-[#666] text-[10.63px] font-normal">Phone number: 08118130114</p>
                  <p className="text-[#338DF6] text-[10.63px] font-normal my-3">Amaka.Nwanze@Premiumtrustbank.com</p>
                  <p className="text-[#338DF6] text-[10.63px] font-normal underline">Contact center</p>

                </div>
                <div className="flex items-center justify-between my-3 w-full">
                  <div className="">
                    <div>
                      <img src={coin} alt='icon' />
                    </div>
                    <p className="text-[14.49px] font-semibold text-center">{postCount ?? 0}</p>
                    {/* <p className="text-center text-[10.87px] font-medium text-[#232323]">Posts</p> */}
                  </div>
                  <div className='h-[3.62px] w-[3.62px] bg-[#6D6C76] rounded-full' />
                  <div>
                    <div>
                      <img src={bolt} alt='icon' />
                    </div>
                    <p className="text-[14.49px] font-semibold text-center">{postCount ?? 0}</p>
                    {/* <p className="text-center text-[10.87px] font-medium text-[#232323]">Votes</p> */}
                  </div>
                </div>

                {/* <span className="flex-grow"></span> */}
                {/* <button
                  className="mr-6 flex items-center text-black"
                  onClick={handleLogout}
                >
                  <RiLogoutBoxLine className="mr-2" />
                  Logout
                </button> */}
              </div>
              <button
                className=" px-4 py-3 bg-primary text-white rounded w-full text-[14.17px] font-semibold"
                onClick={() => navigate("/employee-leaderboard")}
              >
                My Leaderboard
              </button>
            </div>
            <div className="col-span-9 flex flex-col bg-purple-60">
              <div className="flex items-center gap-3">
                <div>
                  <img src={user_picture} alt='user-pfp' className="h-[52.3px] w-[52.3px] object-cover" />
                </div>
                <div className="relative w-full flex items-center bg-white rounded-full" onClick={() => setModal(true)}>
                  <input
                    className="appearance-none block w-full text-gray-700 rounded-full p-4 pr-10 leading-tight focus:outline-none"
                    type="text"
                    name=""
                    placeholder="Create something new"
                  />
                  <button className=" inset-y-0 right-0 bg-[#E43625] text-white focus:outline-none mx-3 my-2 rounded-full w-[165.93px] h-[39.29px]">
                    Suggest an idea
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
                {ideas?.length > 0 ? (
                  ideas?.map((idea) => (
                    <div className="bg-white my-6 rounded border border-white shadow p-4" key={idea?.campaignId}>
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
          </div>
          <Modal isVisible={modal} onClose={() => setModal(false)}>
            <div className="py-3  flex flex-col items-center justify-center">
              {/* <div className="uppercase text-xl">new campaign</div> */}
              <form className="w-[667px] p-5" onSubmit={handleSubmit(postCampaign)}>
                <div className="mt-4">
                  <label
                    htmlFor="details"
                    className="text-[#65676B] text-[12.72px] font-medium "
                  >
                    Upload your photo
                  </label>
                  <div className="h-[160.74px] rounded bg-[#F0F2F5] flex flex-col items-center justify-center mt-[13.17px] gap-3">
                    <div>
                      <img src={upload} alt='icon' />
                    </div>
                    <p className="text-[#333] font-bold text-[17.2px]">Drag & drop files or <span className="text-primary underline">Browse</span></p>
                    <p className="text-[#676767] text-[12.9px] font-normal">Supported formats: JPG, PNG,</p>
                  </div>
                  {/* <Select
                  options={campaignNames}
                  value={selectedCampaignName}
                  onChange={handleSelectCampaignName}
                  isSearchable
                /> */}
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="details"
                    className="text-[#2b2e35] text-sm font-medium mb-2"
                  >
                    Your Idea
                  </label>
                  <textarea
                    className="appearance-none block p-3 w-full text-sm text-gray-700 rounded border border-gray-400 focus:outline-none leading-tight"
                    name="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="details"
                    className="block text-[#D3D0D0] text-xs mb-2"
                  >
                    Minimum of 300 words
                  </label>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="details"
                    className="text-[#2b2e35] text-sm font-medium mb-2"
                  >
                    Campaign Category
                  </label>
                  {/* <Select
                  options={campaignCategory}
                  value={selectedCategory}
                  onChange={handleSelectCategoryChange}
                  isSearchable
                /> */}
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="details"
                    className="text-[#2b2e35] text-sm font-medium mb-2"
                  >
                    User Group
                  </label>
                  {/* <Select
                  options={groups}
                  value={selectedGroup}
                  onChange={handleSelectGroupChange}
                  isSearchable
                /> */}
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="details"
                    className="text-[#2b2e35] text-sm font-medium mb-2"
                  >
                    User Branch
                  </label>
                  {/* <Select
                  options={branches}
                  value={selectedBranch}
                  onChange={handleSelectBranchChange}
                  isSearchable
                /> */}
                </div>
                {additionalFields.map((field, index) => (
                  <div key={index} className="mt-6">
                    <input
                      className="appearance-none block w-full text-gray-700 rounded-full p-3 leading-tight focus:outline-none border border-gray-400"
                      placeholder={`Key Features ${index + 1}`}
                      value={field.value || ""}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </div>
                ))}
                <div className="mt-4 flex items-center">
                  <button
                    type="button"
                    className="bg-green-500 text-white p-2 rounded"
                    onClick={handleAddField}
                  >
                    Add Key Features
                  </button>
                  <p className="text-red-600 text-xs pl-2">
                  </p>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="w-full h-[39.29px] font-bold tracking-wide text-white bg-[#E43625] uppercase"
                  >
                    post campaign
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>

    </>
  );
};

export default Employee;
