import "./data.css";
import img1 from "./YulImages/img1.png";
import img2 from "./YulImages/img2.png";
import img3 from "./YulImages/img3.png";
import img4 from "./YulImages/img4.png";
import img5 from "./YulImages/img5.png";
import img6 from "./YulImages/img6.png";

export const blogList = [
  {
    id: 2,
    title: "ERC20 in Yul",
    category: ["yul"],
    subCategory: ["solidity", "yul", "assembly"],
    description: `Let's begin with what the heck is Yul? 

      Well if you're a solidity developer you might have come across the assembly block right? 
      
      You write Yul in that assembly block. There are a few conventions to write Yul, but we'll leave that for later.
      
      By definition, "Yul is a programming language that is being used as an intermediate language in the compilation of Ethereum smart contracts written in the Solidity language."
      Now there are a few things that you need to keep in mind in the context of writing Yul syntax,

values are assigned using ":=" colon followed by an equality sign, and there is no else statement in Yul, you're supposed to use switch cases instead or simply use if statements. Assembly blocks are bad at communicating with each other (lol) so variable declared inside one assembly block cannot be accessed by other block.

If you're not familiar with ERC20 tokens, just know there are three optional and six mandatory fields.

Optional fields are name, symbol, and decimals. 

Mandatory fields are totalSupply, balanceOf, transfer (from total supply), transferFrom (from one user to another), allowance, and approve. 

`,

    authorName: "Akshat Pathka",
    // authorAvatar: "/assets/images/author.jpg",

    createdAt: "Feb 17, 2023",
    cover: "/assets/images/f67396fc3cfce63a28e07ebb35d974ac.jpg",
    img1: img1,
    description1: `This is a Solidity smart contract that creates a token called "Yul Token". I will go into detail about each part:

     nameLength and nameData define the name of the token, "Yul Token", by storing the length of the string in nameLength (which is 9) and the string itself in nameData.
     
     symbolLength  and symbolData define the symbol of the token, "YUL", in the same way as the name was defined.
     
     Now we have got two custom errors , If the InsufficientBalance error is raised, it means that the user does not have enough tokens to perform a transfer. If the InsufficientAllowance error is raised, it means that the user has not granted enough allowance to another user to perform a transfer on their behalf.`,
    img2: img2,
    description2: `Now we have got two events and two mappings. The two events and the first mapping are self-descriptive. The second mapping has nested mapping, The keys of this mapping are of addresses, with the first being the address of the token owner, and the second being the address of the spender which finally maps to the value of tokens that the spender is allowed to spend.

      I'm assuming you know how Opcodes work. Look at the constructor, it has a few opcodes 
      
      First, we are storing the caller's address at slot 0x00 and then taking the keccak256 hash of 64 bytes from memory location 0x00 to 0x40 and storing it in the variable "slot", further storing maxUint256 on storage at slot "slot" and lastly emitting transfer event with log3 opcodes as it has only two indexed arguments. In short, we are transferring tokens from the contract to the caller's address.
      Inside the name() function, the first few lines allocate memory to be used to store the name. Then, the length and data of the name are stored  with the length being stored at the 2nd slot (0x20-0x40)  and the data being stored at the third slot (0x40-0x60).`,
    img3: img3,
    description3: `Inside the constructor, we had stored maxUint256 in slot 0x02 of storage now by grabbing that value by sload(0x02) we will get the totalSupply.
    The balanceOf() function starts by loading the address of the account whose balance is being requested from the input data. calldataload loads the 32 byte from the given offset, the address is then stored at memory location 0x00. Now by taking the keccak256 hash of the address and providing this value to sload, we can retrieve the balance for the given address. Finally the return statement loads 32 bytes from memory location 0x00 where we stored the balance.`,
    img4: img4,
    description4: `The transfer() function takes two arguments receiver's address and the amount that is intended to be transferred. Assembly block here starts with setting up the memory pointer to 0x40, now  at the location of memptr we are storing the caller's address, after that grabbing the callerBalanceSlot and putting it onto the sload we can retrieve the balance of caller now we will perform a check if the caller has enough balance, if the bal is not enough the code will throw iinsufficientBalanceSelector error and revert would be executed. Moving on now we are decreasing the caller's balance by the value which will be transferred.

      The caller balance slot is now updated and it is persistent because we are storing this value in storage.
      
      Replicating all these steps for the receiver as well but with one difference which is instead of decreasing we would be increasing the receiver's balance (obv lol) and storing it onto the receiver's slot. finally after successful execution we gonna throw transfer event using log3 (the first value represents the non indexed item which is amount in our case) and return true (0x01 is 1 which represents true) `,
    img5: img5,
    description5: `Look at the allowance function now, same stuff setting up the free memptr, here we are taking the owner's address in memory hashing it to get the owner's balance slot further updating the free memory pointer and replicating same steps for spender but this time we will be getting spender's allowance slot, lastly using this slot we load the spender's allowance from the storage and storing it at memory location 0x00 and finally returning it.
    
    Now let's jump on the approve function, after setting the memory pointer, we grab the allowance slot by taking the hash of the spnder and caller address, this hash is used as a key to store the allowance in the _allowances mapping. After setting the approved amount in its respective slot, the approval event is thrown using the log3 opcode and lastly, a boolean value is returned which represents whether the operation we have gone through was successful or not.`,
    img6: img6,
    description6: `The last function of the article is transferFrom, things are getting monotonous, try to demystify on your own but just to give you a gist, we are grabbing the sender's balance from the the senderBalanceSlot, putting assert to check  whether the sender has enough balance he's willing to send, if the sender has enough amount then we will be deducting the  from the sender's balance whilst adding the receiver's balance with the same amount, throwing transfer event and a boolean value will be returned.
    
    
    This is my first blog ever. If you find this helpful then share it, and let's connect on Twitter @0xpsuedopandit

`,
  },
  // {
  //   id: 1,
  //   title: "Dutch Auction",
  //   category: "solidity",
  //   subCategory: ["frontend", "ui/ux", "design"],
  //   description:
  //     "In dutch auction, the price is reduced until a buyer is found. DutchAuction, the contract implements a dutch auction mechanism for selling a NFT represented by an interface called IERC721",
  //   authorName: "John Doe",
  //   authorAvatar: "/assets/images/author.jpg",
  //   createdAt: "June 03, 2021",
  //   cover: "/assets/images/designer-1.jpg",
  // },

  // {
  //   id: 3,
  //   title: "Online Shopping – An Alternative to Shopping in the Mall",
  //   category: "shopping",
  //   subCategory: ["e-commerce store", "clothing", "shopping store"],
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   authorName: "John Doe",
  //   authorAvatar: "/assets/images/author.jpg",
  //   createdAt: "June 03, 2021",
  //   cover: "/assets/images/fQwuyKJ9qxjSbr6REcgtmW-1200-80.jpg",
  // },
  // {
  //   id: 4,
  //   title: "ADVENTURE IN YOU",
  //   category: "adventure",
  //   subCategory: ["adrenaline", "stay-fit", "lifestyle"],
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   authorName: "John Doe",
  //   authorAvatar: "/assets/images/author.jpg",
  //   createdAt: "June 03, 2021",
  //   cover: "/assets/images/graphic-design-trends.png",
  // },
  // {
  //   id: 5,
  //   title: "Loaded BBQ Baked Potatoes",
  //   category: "cooking",
  //   subCategory: ["bbq", "food", "lifestyle"],
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   authorName: "John Doe",
  //   authorAvatar: "/assets/images/author.jpg",
  //   createdAt: "June 03, 2021",
  //   cover: "/assets/images/make-it-personal.jpg",
  // },
  // {
  //   id: 6,
  //   title: "Beyond the Beach",
  //   category: "travel",
  //   subCategory: ["beaches", "sea", "holidays"],
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   authorName: "John Doe",
  //   authorAvatar: "/assets/images/author.jpg",
  //   createdAt: "June 03, 2021",
  //   cover:
  //     "/assets/images/Purple-Combination-colors-graphic-design-predictions-1024x576-1024x576.jpg",
  // },
  // {
  //   id: 7,
  //   title: "Art & Perception",
  //   category: "art",
  //   subCategory: ["skill", "design", "passion"],
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   authorName: "John Doe",
  //   authorAvatar: "/assets/images/author.jpg",
  //   createdAt: "June 03, 2021",
  //   cover: "/assets/images/Synthwave-Postmodern.jpg",
  // },
];
