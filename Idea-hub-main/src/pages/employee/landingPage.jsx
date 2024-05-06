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
import edit from '../../assets/Edit.svg'

import Layout from "./Layout";
import Posts from "./Posts";
import Votes from "./Votes";
import { useDropzone } from 'react-dropzone';


const Employee = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
    },
  });

  

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
  const [activeTab, setActiveTab] = useState('landing_page')

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
    <Layout setActiveTab={setActiveTab} activeTab={activeTab}>
      {activeTab === 'landing_page' && <div>
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

                <div className="h-[160.74px] rounded bg-[#F0F2F5] flex flex-col items-center border justify-center mt-[13.17px] gap-3 cursor-pointer hover:border-primary hover:border-dashed" {...getRootProps()}>
                  <div>
                    <img src={upload} alt='icon' />
                  </div>
                  {isDragActive ? (
                <p className="dropzone-content mb-0">Release to drop the files here</p>
              ) : (
                <p className="text-[#333] font-bold text-[17.2px]">Drag & drop files or <span className="text-primary underline">Browse</span></p>
               
              )}
                  {uploadedFiles.map((file) => (
                    <li key={file.name}>{file.name}</li>
                  ))}
                  <input {...getInputProps()} type='file' accept=".png, .jpg, .jpeg"  />
                  <p className="text-[#676767] text-[12.9px] font-normal">Supported formats: JPG, PNG,</p>
                </div>
                <div className="border px-3 w-full mt-8 mb-5 rounded border-[#D2D2D2] py-3">
                  <select className="border-none w-full text-[#666] placeholder:opacity-[20%] focus:border-primary outline-none" >
                    <option>Add category</option>
                    <option>
                      Road to 1,000,000 Customers
                      • Description: Join us on our journey towards a milestone of 1,000,000 customers by year end 2024. Play an active part by suggesting innovative ideas on how we can achieve this ambitious goal.
                      Together for Growth!</option>
                    <option>Mission 1.4trn
                      • Description: The bank is on a mission to achieve a target of 1.4 trillion in deposits. Together, let's suggest amazing ideas on how we can smash this goal.
                      Together for Growth!
                    </option>
                    <option>What's New Premium?
                      • Description: Explore our latest premium products and share your innovative ideas for enhancing their features. Your valuable suggestions will help us tailor our offerings.
                      Together for Growth!</option>
                    <option>
                      Our Everyday Product Champions
                      • Description: Contribute your ideas and suggestions for enhancing the features of existing products. Become a champion of our everyday products by sharing your insights to make them even more valuable to our customers.
                      Together for Growth!
                    </option>

                  </select>
                </div>
                <div className="flex border px-3 w-full mb-5 rounded border-[#D2D2D2] py-3 gap-3">
                  <img src={edit} alt='icon' />
                  <input className="border-none w-full text-[#666] opacity-[20%] focus:border-none outline-none" placeholder="Add title" />

                </div>
                <div className="">
                  <textarea rows={6} className="py-5 px-5 rounded border border-[#D2D2D2]  w-full text-[#666] placeholder:opacity-[20%] focus:border-none outline-none" placeholder="Write Something..." />

                </div>

                <div className="mt-10 flex items-center justify-center w-3/5 mx-auto">
                  <button
                    type="submit"
                    className="w-full px-16 h-[39.29px] font-bold tracking-wide text-white bg-[#E43625] uppercase rounded"
                  >
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div >}

      {activeTab === 'posts' && <Posts />}
      {activeTab === 'votes' && <Votes />}



    </Layout >
  );
};

export default Employee;
