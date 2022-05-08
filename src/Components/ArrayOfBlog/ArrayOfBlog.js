import { useState, createContext } from "react";

export const ArrayofBlogs = createContext()


export const DataBase = props => {
    const [data] = useState([
            {
                ID : 1,
                Author : "Brajeswar Ghosh",
                Title : "Alia Bhatt and Ranbir Kapoor are married.",
                Image : "https://images.hindustantimes.com/img/2022/04/14/550x309/Ranlia_1649944945023_1649944962524.jpeg",
                Body : "Congratulations, Alia Bhatt and Ranbir Kapoor. The couple got married at an intimate ceremony at their house in Mumbai on Thursday, in the presence of a few family members and close friends. Alia Bhatt and Ranbir Kapoor have been dating for over a decade. Sharing the pictures from the wedding, Alia Bhatt wrote: Finally after 10 years of love, romance, friendship and fun, I got married to my everything today, my soulmate, my best friend, my family. Today there is no greater happiness for me than being called your betterhalf Alia. Here's to forever .. and beyond. Ranbir wrote in her post: I got married to my everything today; my girlfriend, my partner in crime, my family, my soulmate...My best friend for the last 10 years! There is no greater feeling than to be your husband! Here's to our forever..",
                Category : "Bollywood",
                Date : " April 14 2022",
                tags: ["Alia", "Ranbir"],
                readtime: "2 mins read"
            },
            {
                ID : 2,
                Author : "News 18",
                Image : "https://weraveyou.com/wp-content/uploads/2021/03/apps.53280.13756631990520576.c7bf8936-a11d-4c89-b498-2442c2977baf.png",
                Title : "Amazon Music Crosses 55 Million Global Subscriptions, Closes In on Apple Music",
                Body : "Amazon said that its streaming music service has won more than 55 million subscribers, closing in on Apple Music. Amazon Music, however, still has a long way to go to catch up to Spotify, which boasts 248 million users, including 113 million paid subscribers. Amazon said that its music service had a year of incredible growth around the world is that included a more than 50 per cent jump in the number of Prime service subscribers who pay to upgrade to an Unlimited music option.  We are proud to reach this incredible milestone, said Amazon Music vice president Steve Boom. We have always been focused on expanding the marketplace for music streaming by offering music listeners unparalleled choice because we know that different listeners have different needs. Amazon Prime memberships costing $119 annually in the US include access to a library of some two million songs and free, fast deliveries of online purchases. In India, Amazon Prime is priced at Rs 129 per month and Rs 999 a year. Amazon offers several streaming music subscription options for those who are not Prime members in select markets. Amazon Music has grown about 50 per cent in Britain, Germany, Japan, and the US during the past year, and is winning listeners in newer markets such as France, Italy, Mexico and Spain, according to the Seattle-based company.",
                Category : "Bollywood",
                Date : " January 23, 2020",
                tags: ["Bollywood", "Amazon Music"],
                readtime: "4 mins read"
            },
            {
                ID : 3,
                Author : "Hindustan Times",
                Image : "https://static.toiimg.com/photo/89414066.jpeg",
                Title : "Alia Bhatt's Gangubai Kathiawadi is top non-English film on Netflix worldwide",
                Body : "Actor Alia Bhatt starrer-Gangubai Kathiawadi has been breaking box office records since its release on February 25, 2022. On Wednesday, Alia shared the film's poster on her Instagram Stories and revealed that it has now become the top non-English film on Netflix globally. Within a week, Gangubai Kathiawadi has become number one non-English film on Netflix globally. The film has been watched for 13.81 million hours and has featured in the Top 10 in Films in 25 countries across the world, including Canada, United Kingdom, South Africa, Australia, New Zealand and UAE. Alia and her mother Soni Razdan shared the news of Gangubai Kathiawadi's new milestone on their Instagram Stories. The film is based on S Hussain Zaidi's book Mafia Queens of Mumbai and follows the journey of Gangu (played by Alia), who was sold into a brothel in Mumbai's Kamathipura.",
                Category : "Bollywood",
                Date : " February 2, 2022",
                tags: ["Bollywood", "Alia Bhatt"],
                readtime: "4 mins read"
            },
            {
                ID : 4,
                Author : "ETIMES",
                Image : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1KEAH64-u5MXX8-LW5FMKfPOGYKLoRn442hpjFQAJeQHb6a4ibyNGTTpeNTFMHNDGGvtMugRIU38u-qIisoDEggtU5aKO6uHidPU9EE7ZsQcv0JI3mAC5N7hgpw0iqk1bctsXQ5Ka6pi1-hEk-_YRIYX_ERP5YiXYPYdLV8AX_ME9j65SkLqHDGn6/s900/KGF-2-Movie-6.jpg",
                Title : "‘KGF 2’ Hindi beats lifetime collection of Aamir Khan's ‘Dangal’ with its humongous total of Rs 381 crore",
                Body : "‘KGF 2’ Hindi is on a ride to success and is refusing to slow down. When films like ‘Heropanti 2’ and ‘Runway 34’ are struggling at the box office, this Yash starrer is on a record-breaking spree. The day after Eid, the film’s collection continued with its positive trend. ‘KGF 2’ Hindi earned Rs 8 crore on its third Wednesday, reports Boxofficeindia. The film earned a humongous response from Delhi / UP and West Bengal circuits. Currently, ‘KGF 2’ Hindi stands at a humongous total of Rs 381 crore. The film has managed to beat the lifetime collection of Aamir Khan starrer ‘Dangal’, which had earned Rs 374 crore at the end of its theatrical run in 2016. ‘KGF 2’ Hindi is currently the highest grossing Hindi movie, after ‘Baahubali: The Conclusion’. The collection of ‘KGF 2’ Hindi may be affected with the release of Hollywood biggie ‘Doctor Strange In The Multiverse of Madness’ tomorrow. Directed by Prashanth Neel, ‘KGF 2’ Hindi features Yash, Sanjay Dutt, Srinidhi Shetty, Prakash Raj and Raveena Tandon in pivotal roles. Speaking about pan-India films, Raveena had told ETimes in an interview, ‘Today, cinema is being appreciated across borders. The language doesn’t matter anymore, what matters is the content. Now, fortunately, actors are being offered subjects keeping their maturity and talent in mind.’",
                Category : "Bollywood",
                Date : " May 5, 2022",
                tags: ["Bollywood", "KGF"],
                readtime: "4 mins read"
            },
            {
                ID : 5,
                Author : "Hungama Music",
                Image : "https://stat1.bollywoodhungama.in/wp-content/uploads/2021/11/Sooryavanshi-17-1.jpg",
                Title : "Sooryavanshi becomes Akshay Kumar’s 3rd highest all time second weekend grosser",
                Body : "The Akshay Kumar starrer Sooryavanshi released a while back, and since then the film has been doing brisk business at the box office. After opening to a thunderous response from the audience, the business of the film saw good growth as the days progressed. Being the first big ticket Bollywood entertainer to hit screens post the second lockdown, expectations from the film were at an all-time high. Not surprisingly, Sooryavanshi that saw a release across 3000+ screens, has surpassed expectations. In this box office report, we take a look at the second weekend collections of Sooryavanshi while comparing the same to Akshay Kumar’s previous releases that have made it to their second weekend in theatres. Collecting Rs. 30.57 cr, Sooryavanshi has become Akshay’s third highest second weekend grosser. Though the business of the film does not surpass the collections of Akshay’s previous releases like Mission Mangal that collected Rs. 36.45 cr, and Good Newwz that collected Rs. 34.20 cr. However, the business of the film surpassed the actor’s other releases like Housefull 4 that collected Rs. 29.98 cr, 2.0 that collected Rs. 27 cr, Holiday – A Soldier Is Never Off Duty that collected Rs. 19.52 cr, Airlift that collected Rs. 19.26 cr, Kesari that collected Rs. 19.15 cr, Toilet – Ek Prem Katha that collected Rs. 19 cr, and Jolly LLB 2 that had collected Rs. 17.73 cr.",
                Category : "Bollywood",
                Date : " November 16, 2021",
                tags: ["Bollywood", "AkshayKumar"],
                readtime: "4 mins read"
            },
            {
                ID : 6,
                Author : "Brajeswar Ghosh",
                Title : "Alia Bhatt and Ranbir Kapoor are married.",
                Image : "https://images.hindustantimes.com/img/2022/04/14/550x309/Ranlia_1649944945023_1649944962524.jpeg",
                Body : "Congratulations, Alia Bhatt and Ranbir Kapoor. The couple got married at an intimate ceremony at their house in Mumbai on Thursday, in the presence of a few family members and close friends. Alia Bhatt and Ranbir Kapoor have been dating for over a decade. Sharing the pictures from the wedding, Alia Bhatt wrote: Finally after 10 years of love, romance, friendship and fun, I got married to my everything today, my soulmate, my best friend, my family. Today there is no greater happiness for me than being called your betterhalf Alia. Here's to forever .. and beyond. Ranbir wrote in her post: I got married to my everything today; my girlfriend, my partner in crime, my family, my soulmate...My best friend for the last 10 years! There is no greater feeling than to be your husband! Here's to our forever..",
                Category : "Bollywood",
                Date : " April 14 2022",
                tags: ["Alia", "Ranbir"],
                readtime: "2 mins read"
            },
            {
                ID : 7,
                Author : "News 18",
                Image : "https://weraveyou.com/wp-content/uploads/2021/03/apps.53280.13756631990520576.c7bf8936-a11d-4c89-b498-2442c2977baf.png",
                Title : "Amazon Music Crosses 55 Million Global Subscriptions, Closes In on Apple Music",
                Body : "Amazon said that its streaming music service has won more than 55 million subscribers, closing in on Apple Music. Amazon Music, however, still has a long way to go to catch up to Spotify, which boasts 248 million users, including 113 million paid subscribers. Amazon said that its music service had a year of incredible growth around the world is that included a more than 50 per cent jump in the number of Prime service subscribers who pay to upgrade to an Unlimited music option.  We are proud to reach this incredible milestone, said Amazon Music vice president Steve Boom. We have always been focused on expanding the marketplace for music streaming by offering music listeners unparalleled choice because we know that different listeners have different needs. Amazon Prime memberships costing $119 annually in the US include access to a library of some two million songs and free, fast deliveries of online purchases. In India, Amazon Prime is priced at Rs 129 per month and Rs 999 a year. Amazon offers several streaming music subscription options for those who are not Prime members in select markets. Amazon Music has grown about 50 per cent in Britain, Germany, Japan, and the US during the past year, and is winning listeners in newer markets such as France, Italy, Mexico and Spain, according to the Seattle-based company.",
                Category : "Bollywood",
                Date : " January 23, 2020",
                tags: ["Bollywood", "Amazon Music"],
                readtime: "4 mins read"
            },
            {
                ID : 8,
                Author : "Hindustan Times",
                Image : "https://static.toiimg.com/photo/89414066.jpeg",
                Title : "Alia Bhatt's Gangubai Kathiawadi is top non-English film on Netflix worldwide",
                Body : "Actor Alia Bhatt starrer-Gangubai Kathiawadi has been breaking box office records since its release on February 25, 2022. On Wednesday, Alia shared the film's poster on her Instagram Stories and revealed that it has now become the top non-English film on Netflix globally. Within a week, Gangubai Kathiawadi has become number one non-English film on Netflix globally. The film has been watched for 13.81 million hours and has featured in the Top 10 in Films in 25 countries across the world, including Canada, United Kingdom, South Africa, Australia, New Zealand and UAE. Alia and her mother Soni Razdan shared the news of Gangubai Kathiawadi's new milestone on their Instagram Stories. The film is based on S Hussain Zaidi's book Mafia Queens of Mumbai and follows the journey of Gangu (played by Alia), who was sold into a brothel in Mumbai's Kamathipura.",
                Category : "Bollywood",
                Date : " February 2, 2022",
                tags: ["Bollywood", "Alia Bhatt"],
                readtime: "4 mins read"
            },
            {
                ID : 9,
                Author : "ETIMES",
                Image : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1KEAH64-u5MXX8-LW5FMKfPOGYKLoRn442hpjFQAJeQHb6a4ibyNGTTpeNTFMHNDGGvtMugRIU38u-qIisoDEggtU5aKO6uHidPU9EE7ZsQcv0JI3mAC5N7hgpw0iqk1bctsXQ5Ka6pi1-hEk-_YRIYX_ERP5YiXYPYdLV8AX_ME9j65SkLqHDGn6/s900/KGF-2-Movie-6.jpg",
                Title : "‘KGF 2’ Hindi beats lifetime collection of Aamir Khan's ‘Dangal’ with its humongous total of Rs 381 crore",
                Body : "‘KGF 2’ Hindi is on a ride to success and is refusing to slow down. When films like ‘Heropanti 2’ and ‘Runway 34’ are struggling at the box office, this Yash starrer is on a record-breaking spree. The day after Eid, the film’s collection continued with its positive trend. ‘KGF 2’ Hindi earned Rs 8 crore on its third Wednesday, reports Boxofficeindia. The film earned a humongous response from Delhi / UP and West Bengal circuits. Currently, ‘KGF 2’ Hindi stands at a humongous total of Rs 381 crore. The film has managed to beat the lifetime collection of Aamir Khan starrer ‘Dangal’, which had earned Rs 374 crore at the end of its theatrical run in 2016. ‘KGF 2’ Hindi is currently the highest grossing Hindi movie, after ‘Baahubali: The Conclusion’. The collection of ‘KGF 2’ Hindi may be affected with the release of Hollywood biggie ‘Doctor Strange In The Multiverse of Madness’ tomorrow. Directed by Prashanth Neel, ‘KGF 2’ Hindi features Yash, Sanjay Dutt, Srinidhi Shetty, Prakash Raj and Raveena Tandon in pivotal roles. Speaking about pan-India films, Raveena had told ETimes in an interview, ‘Today, cinema is being appreciated across borders. The language doesn’t matter anymore, what matters is the content. Now, fortunately, actors are being offered subjects keeping their maturity and talent in mind.’",
                Category : "Bollywood",
                Date : " May 5, 2022",
                tags: ["Bollywood", "KGF"],
                readtime: "4 mins read"
            },
            {
                ID : 10,
                Author : "Hungama Music",
                Image : "https://stat1.bollywoodhungama.in/wp-content/uploads/2021/11/Sooryavanshi-17-1.jpg",
                Title : "Sooryavanshi becomes Akshay Kumar’s 3rd highest all time second weekend grosser",
                Body : "The Akshay Kumar starrer Sooryavanshi released a while back, and since then the film has been doing brisk business at the box office. After opening to a thunderous response from the audience, the business of the film saw good growth as the days progressed. Being the first big ticket Bollywood entertainer to hit screens post the second lockdown, expectations from the film were at an all-time high. Not surprisingly, Sooryavanshi that saw a release across 3000+ screens, has surpassed expectations. In this box office report, we take a look at the second weekend collections of Sooryavanshi while comparing the same to Akshay Kumar’s previous releases that have made it to their second weekend in theatres. Collecting Rs. 30.57 cr, Sooryavanshi has become Akshay’s third highest second weekend grosser. Though the business of the film does not surpass the collections of Akshay’s previous releases like Mission Mangal that collected Rs. 36.45 cr, and Good Newwz that collected Rs. 34.20 cr. However, the business of the film surpassed the actor’s other releases like Housefull 4 that collected Rs. 29.98 cr, 2.0 that collected Rs. 27 cr, Holiday – A Soldier Is Never Off Duty that collected Rs. 19.52 cr, Airlift that collected Rs. 19.26 cr, Kesari that collected Rs. 19.15 cr, Toilet – Ek Prem Katha that collected Rs. 19 cr, and Jolly LLB 2 that had collected Rs. 17.73 cr.",
                Category : "Bollywood",
                Date : " November 16, 2021",
                tags: ["Bollywood", "AkshayKumar"],
                readtime: "4 mins read"
            },



            {
                ID : 1,
                Author : "THE IRISH TIMES",
                Image : "https://www.irishtimes.com/polopoly_fs/1.4868458.1651654217!/image/image.jpg_gen/derivatives/landscape_620/image.jpg",
                Title : "The Enabot Ebo Air robot can entertain and provide security, but it’s not essential",
                Body : "Do you need a companion robot? These are the ones that tell jokes, remind you to take your medication, or allow you to communicate with family members who can’t drop in regularly. They don’t exactly replace human interaction, but rather facilitate it, with a friendly, non-threatening face that doesn’t trigger that uncanny valley feeling of revulsion or unease. I’m not entirely sure I need or want one. With a full house I’m usually trying to find time away from everyone rather than adding more people who demand my attention. But the Enabot Ebo Air has its uses. Thankfully devoid of humanoid features, the Ebo Air looks more like a Sphero, but with added tracks on the bottom to help it move around. It also has a small display that flashes up heart icons, a Wi-Fi symbol or a photo icon. If you have pets, for example, or children, the robot will be both entertainment and a way to stay in touch. And the company is billing it as a mobile security camera, complete with night vision and high-definition recording to its on-board micro-SD card that you can steer around the house, presumably in search of intruders, while you are out of the house or even out of the country thanks to its wifi connection. It does all this through the mobile app, which acts as a viewfinder for Ebo’s on-board camera, and allows you to communicate with people or pets in your home. If you are a lockdown pet owner it is one way for you to keep a close watch on your pet if you suddenly find yourself returning to the office. Obviously, it’s not a complete solution for those who are going to be out for eight hours at a time, but you can peek in every now and again or play with your pet while you are away. The dedicated pet mode means Ebo will roll out at regular intervals to play with your pet, tearing around the house with accompanying cute sound effects. As we don’t have any pets – apart from the fish, who are not Ebo’s target market – it mostly served as a companion for my children. After an initial period of suspicion, they found its antics hilarious and christened it ‘Bebop’. Most young children don’t have a very big attention span, unless you dangle a YouTube series of videos of other people unwrapping toys in front of them, so I wasn’t too sure how long Ebo would keep them occupied. I was pleasantly surprised. I used the pet settings, including the laser pointer feature I assume is meant for cats, to keep them occupied. While Ebo tore around our living room, spinning itself around in circles, they found it hilarious for far longer than I thought it would. It was also fun to roll Ebo out while I was elsewhere in the house to surprise a four-year-old trying to sneakily raid the biscuits. Because it’s relatively silent, the robot could sneak up on him and surprise him. Plus, I could record the footage, which was better quality than I thought it would be, for future use. Ebo can also track subjects, recognizing humans and pets, and following whichever one you select. When Ebo runs low on power it will take itself back to the dock, muttering ‘I’m going home to charge’ as it goes. When it can’t reach the dock, like all good robots it will alert you through the mobile app and you can solve the problem. Sometimes that is easier said than done, especially with the aforementioned four-year-old who has a mischievous streak a mile wide. Places I have found Ebo include random toyboxes in the playroom, a school backpack hung on the back of the door, under the sofa cushions in the living room, and once, memorably, in the fridge beside the milk. I swear the small heart shone with gratitude when I rescued it from that one.",
                Category : "Technology",
                Date : " May 05 2022",
                tags: ["Home Science", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 2,
                Author : "THE TIMES OF INDIA",
                Image : "https://bsmedia.business-standard.com/_media/bs/img/article/2022-03/21/full/1647884528-055.jpg",
                Title : "LIC IPO",
                Body : "NEW DELHI: India's biggest initial public offer (IPO) by insurance behemoth Life Insurance Corporation (LIC) was fully subscribed on day 2 bidding, data from exchanges showed. U no ed Faces. A Bids were received for 16.25 crore shares as against 16.20 shares being offered for sale by LIC. The portion reserved for policyholders and employees received the greatest number of subscriptions. While, the policyholders' portion was subscribed 3.07 times, that for employees was subscribed 2.14 times.",
                Category : "Technology",
                Date : " May 05 2022",
                tags: ["LIC", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 3,
                Author : "THE IRISH TIMES",
                Image : "https://www.irishtimes.com/polopoly_fs/1.4868458.1651654217!/image/image.jpg_gen/derivatives/landscape_620/image.jpg",
                Title : "The Enabot Ebo Air robot can entertain and provide security, but it’s not essential",
                Body : "Do you need a companion robot? These are the ones that tell jokes, remind you to take your medication, or allow you to communicate with family members who can’t drop in regularly. They don’t exactly replace human interaction, but rather facilitate it, with a friendly, non-threatening face that doesn’t trigger that uncanny valley feeling of revulsion or unease. I’m not entirely sure I need or want one. With a full house I’m usually trying to find time away from everyone rather than adding more people who demand my attention. But the Enabot Ebo Air has its uses. Thankfully devoid of humanoid features, the Ebo Air looks more like a Sphero, but with added tracks on the bottom to help it move around. It also has a small display that flashes up heart icons, a Wi-Fi symbol or a photo icon. If you have pets, for example, or children, the robot will be both entertainment and a way to stay in touch. And the company is billing it as a mobile security camera, complete with night vision and high-definition recording to its on-board micro-SD card that you can steer around the house, presumably in search of intruders, while you are out of the house or even out of the country thanks to its wifi connection. It does all this through the mobile app, which acts as a viewfinder for Ebo’s on-board camera, and allows you to communicate with people or pets in your home. If you are a lockdown pet owner it is one way for you to keep a close watch on your pet if you suddenly find yourself returning to the office. Obviously, it’s not a complete solution for those who are going to be out for eight hours at a time, but you can peek in every now and again or play with your pet while you are away. The dedicated pet mode means Ebo will roll out at regular intervals to play with your pet, tearing around the house with accompanying cute sound effects. As we don’t have any pets – apart from the fish, who are not Ebo’s target market – it mostly served as a companion for my children. After an initial period of suspicion, they found its antics hilarious and christened it ‘Bebop’. Most young children don’t have a very big attention span, unless you dangle a YouTube series of videos of other people unwrapping toys in front of them, so I wasn’t too sure how long Ebo would keep them occupied. I was pleasantly surprised. I used the pet settings, including the laser pointer feature I assume is meant for cats, to keep them occupied. While Ebo tore around our living room, spinning itself around in circles, they found it hilarious for far longer than I thought it would. It was also fun to roll Ebo out while I was elsewhere in the house to surprise a four-year-old trying to sneakily raid the biscuits. Because it’s relatively silent, the robot could sneak up on him and surprise him. Plus, I could record the footage, which was better quality than I thought it would be, for future use. Ebo can also track subjects, recognizing humans and pets, and following whichever one you select. When Ebo runs low on power it will take itself back to the dock, muttering ‘I’m going home to charge’ as it goes. When it can’t reach the dock, like all good robots it will alert you through the mobile app and you can solve the problem. Sometimes that is easier said than done, especially with the aforementioned four-year-old who has a mischievous streak a mile wide. Places I have found Ebo include random toyboxes in the playroom, a school backpack hung on the back of the door, under the sofa cushions in the living room, and once, memorably, in the fridge beside the milk. I swear the small heart shone with gratitude when I rescued it from that one.",
                Category : "Technology",
                Date : " May 05 2022",
                tags: ["Home Science", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 4,
                Author : "Local News",
                Image : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/crypto_0_1200x768.jpeg?ARzhHNDhzEZFvnu5WhxQzN1ByhyorYwm&size=770:433",
                Title : "Crypto can't be stopped, there's need for regulation",
                Body : "With an understanding that crypto cannot be stopped in the country, the Members of Parliament (MPs) on Monday during a Parliamentary panel meet said that there is a need for regulation. While flagging off full-page crypto advertisements in national dailies, MPs said that the security of investors money is the most serious concern for all members.This is almost like the Ponzi scheme which got strong legal regulations later, MPs said, adding that El Salvador is the only country to legalise crypto so far.",
                Category : "Technology",
                Date : " November 16 2021",
                tags: ["Crypto", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 5,
                Author : "THE TIMES OF INDIA",
                Image : "https://erepublic.brightspotcdn.com/dims4/default/996d2ba/2147483647/strip/false/crop/7669x4314+0+0/resize/1486x836!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.amazonaws.com%2Fe5%2F43%2F0e5edf23414ca362efb8dac52c0b%2Fshutterstock-1183499047.jpg",
                Title : "When will 5G services launch in India?",
                Body : "Have a 5G phone but don’t know when you will be able to put your phone’s capability to the best use? Worry no more as India could get 5G services as early as this year. The Department of Telecommunications (DoT) has confirmed that 5G services will launch in India in 2022. The DoT has also revealed that the 5G services will be made available in 13 Indian cities in the beginning. It will then be rolled out in remaining cities. ‘Costing Rs 224 crore, the project is likely to be completed by December 31, 2021, paving the way for end-to-end testing of 5G (/topic/5g) User Equipment’s (UEs) and network equipment by 5G (/topic/5g) stakeholders developing 5G (/topic/5g) products/services/use cases, including indigenous start-ups, SMEs, Academia and Industry in the country,’ DoT said in an official statement. The telecommunications department said that the 13 cities that will get 5G services include Ahmedabad, Bengaluru, Chandigarh, Gandhinagar, Gurugram, Hyderabad, Jamnagar, Kolkata, Chennai, Lucknow, Pune, Delhi, and Mumbai. The DoT had previously said that it would complete the 5G project by December 31, 2021. Telecom Minister Ashwini Vaishnaw had announced that the government is expected to hold the auction of the 5G spectrum, including airwaves, in early June. Post the auction, the government may finally start rolling out 5G services to people in the 13 cities in August and September this year. The DoT has not revealed which telecom operator among Jio, Vodafone and Airtel will roll out the 5G services first. However, all the three telecom operators are expected to launch their 5G services around the same time. As per reports, Jio, Airtel and even Vodafone have already set up their trial sites in the 13 cities that are expected to get 5G services. As per reports, Airtel and Jio have claimed to be the first operators to roll out 5G services in India. Airtel's Bharti Mittal has confirmed that the company’s 5G network is ready and it will roll out soon after the auction is completed. ‘Yes, you will get faster speeds but they will be there. There is a desire of the government to start 5G soon, right? As soon as the recommendations come and auctions happen, within months I would say you will have early 5G networks coming up and Airtel has been getting ready for the same,’ Mittal had told ET Telecom in an interview.",
                Category : "Technology",
                Date : " May 03 2022",
                tags: ["Features", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 6,
                Author : "THE TIMES OF INDIA",
                Image : "https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/12/dak-pay-india-post-payment-bank-app.jpg?fit=1998%2C1140&ssl=1",
                Title : "India is gearing up for a post-UPI digital payments revolution",
                Body : "There is a wide consensus in the financial world that India’s Unified Payments Interface (UPI) is one of the biggest and most impactful financial technology innovations to have come out in the world. Most nations still do not have an equivalent or similar system for free and real-time interbank payments and a growing number of them are actively evaluating implementing UPI in their own jurisdictions.<br /> Now, two new fintech innovations from RBI are likely to even surpass UPI in their grassroot impact; bringing all the benefits and advantages of digital payments to a whole new class of users who do not have stable Internet at all times; or are feature phone users without any mobile Internet connectivity. According to a 2020 WEF report, nearly 700 million people in India are still unconnected, which translates to about 50% of the country’s population still not having internet access. <br />Early in January, the Reserve Bank of India released its framework to allow offline digital payments of up to ?200 per transaction with an overall limit of ?2,000. This framework allows digital payments to take place without Internet connectivity (offline mode), which is a huge boon for building greater trust in digital payments in remote, rural or semi-urban areas that often suffer from poor mobile Internet connectivity. <br />To protect consumer safety, RBI has not only set a reasonable limit, but also mandated that these transactions must be conducted only in face-to-face mode (in the presence of the account owner or beneficiary). However, they can still be made using any of the popular payment channels or modes including debit cards, wallets or mobile devices. As the transactions are offline, users will receive SMS or email alerts when they are connected to a network. Further, these transactions will not require an OTP or any other Additional Factor of Authentication (AFA). <br />In the case of smartphones, the offline digital payments could be enabled through an ‘on-device’ wallet inside the user’s favorite UPI app. Recall that in December last year, RBI had proposed to enable wallets in UPI apps specifically for low-value transactions, in order to conserve banks’ system resources, without any change in the transaction experience for the user.",
                Category : "Technology",
                Date : " April 09 2022",
                tags: ["UPI", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 7,
                Author : "THE IRISH TIMES",
                Image : "https://www.irishtimes.com/polopoly_fs/1.4868458.1651654217!/image/image.jpg_gen/derivatives/landscape_620/image.jpg",
                Title : "The Enabot Ebo Air robot can entertain and provide security, but it’s not essential",
                Body : "Do you need a companion robot? These are the ones that tell jokes, remind you to take your medication, or allow you to communicate with family members who can’t drop in regularly. They don’t exactly replace human interaction, but rather facilitate it, with a friendly, non-threatening face that doesn’t trigger that uncanny valley feeling of revulsion or unease. I’m not entirely sure I need or want one. With a full house I’m usually trying to find time away from everyone rather than adding more people who demand my attention. But the Enabot Ebo Air has its uses. Thankfully devoid of humanoid features, the Ebo Air looks more like a Sphero, but with added tracks on the bottom to help it move around. It also has a small display that flashes up heart icons, a Wi-Fi symbol or a photo icon. If you have pets, for example, or children, the robot will be both entertainment and a way to stay in touch. And the company is billing it as a mobile security camera, complete with night vision and high-definition recording to its on-board micro-SD card that you can steer around the house, presumably in search of intruders, while you are out of the house or even out of the country thanks to its wifi connection. It does all this through the mobile app, which acts as a viewfinder for Ebo’s on-board camera, and allows you to communicate with people or pets in your home. If you are a lockdown pet owner it is one way for you to keep a close watch on your pet if you suddenly find yourself returning to the office. Obviously, it’s not a complete solution for those who are going to be out for eight hours at a time, but you can peek in every now and again or play with your pet while you are away. The dedicated pet mode means Ebo will roll out at regular intervals to play with your pet, tearing around the house with accompanying cute sound effects. As we don’t have any pets – apart from the fish, who are not Ebo’s target market – it mostly served as a companion for my children. After an initial period of suspicion, they found its antics hilarious and christened it ‘Bebop’. Most young children don’t have a very big attention span, unless you dangle a YouTube series of videos of other people unwrapping toys in front of them, so I wasn’t too sure how long Ebo would keep them occupied. I was pleasantly surprised. I used the pet settings, including the laser pointer feature I assume is meant for cats, to keep them occupied. While Ebo tore around our living room, spinning itself around in circles, they found it hilarious for far longer than I thought it would. It was also fun to roll Ebo out while I was elsewhere in the house to surprise a four-year-old trying to sneakily raid the biscuits. Because it’s relatively silent, the robot could sneak up on him and surprise him. Plus, I could record the footage, which was better quality than I thought it would be, for future use. Ebo can also track subjects, recognizing humans and pets, and following whichever one you select. When Ebo runs low on power it will take itself back to the dock, muttering ‘I’m going home to charge’ as it goes. When it can’t reach the dock, like all good robots it will alert you through the mobile app and you can solve the problem. Sometimes that is easier said than done, especially with the aforementioned four-year-old who has a mischievous streak a mile wide. Places I have found Ebo include random toyboxes in the playroom, a school backpack hung on the back of the door, under the sofa cushions in the living room, and once, memorably, in the fridge beside the milk. I swear the small heart shone with gratitude when I rescued it from that one.",
                Category : "Technology",
                Date : " May 05 2022",
                tags: ["Home Science", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 8,
                Author : "THE TIMES OF INDIA",
                Image : "https://bsmedia.business-standard.com/_media/bs/img/article/2022-03/21/full/1647884528-055.jpg",
                Title : "LIC IPO",
                Body : "NEW DELHI: India's biggest initial public offer (IPO) by insurance behemoth Life Insurance Corporation (LIC) was fully subscribed on day 2 bidding, data from exchanges showed. U no ed Faces. A Bids were received for 16.25 crore shares as against 16.20 shares being offered for sale by LIC. The portion reserved for policyholders and employees received the greatest number of subscriptions. While, the policyholders' portion was subscribed 3.07 times, that for employees was subscribed 2.14 times.",
                Category : "Technology",
                Date : " May 05 2022",
                tags: ["LIC", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 9,
                Author : "THE IRISH TIMES",
                Image : "https://www.irishtimes.com/polopoly_fs/1.4868458.1651654217!/image/image.jpg_gen/derivatives/landscape_620/image.jpg",
                Title : "The Enabot Ebo Air robot can entertain and provide security, but it’s not essential",
                Body : "Do you need a companion robot? These are the ones that tell jokes, remind you to take your medication, or allow you to communicate with family members who can’t drop in regularly. They don’t exactly replace human interaction, but rather facilitate it, with a friendly, non-threatening face that doesn’t trigger that uncanny valley feeling of revulsion or unease. I’m not entirely sure I need or want one. With a full house I’m usually trying to find time away from everyone rather than adding more people who demand my attention. But the Enabot Ebo Air has its uses. Thankfully devoid of humanoid features, the Ebo Air looks more like a Sphero, but with added tracks on the bottom to help it move around. It also has a small display that flashes up heart icons, a Wi-Fi symbol or a photo icon. If you have pets, for example, or children, the robot will be both entertainment and a way to stay in touch. And the company is billing it as a mobile security camera, complete with night vision and high-definition recording to its on-board micro-SD card that you can steer around the house, presumably in search of intruders, while you are out of the house or even out of the country thanks to its wifi connection. It does all this through the mobile app, which acts as a viewfinder for Ebo’s on-board camera, and allows you to communicate with people or pets in your home. If you are a lockdown pet owner it is one way for you to keep a close watch on your pet if you suddenly find yourself returning to the office. Obviously, it’s not a complete solution for those who are going to be out for eight hours at a time, but you can peek in every now and again or play with your pet while you are away. The dedicated pet mode means Ebo will roll out at regular intervals to play with your pet, tearing around the house with accompanying cute sound effects. As we don’t have any pets – apart from the fish, who are not Ebo’s target market – it mostly served as a companion for my children. After an initial period of suspicion, they found its antics hilarious and christened it ‘Bebop’. Most young children don’t have a very big attention span, unless you dangle a YouTube series of videos of other people unwrapping toys in front of them, so I wasn’t too sure how long Ebo would keep them occupied. I was pleasantly surprised. I used the pet settings, including the laser pointer feature I assume is meant for cats, to keep them occupied. While Ebo tore around our living room, spinning itself around in circles, they found it hilarious for far longer than I thought it would. It was also fun to roll Ebo out while I was elsewhere in the house to surprise a four-year-old trying to sneakily raid the biscuits. Because it’s relatively silent, the robot could sneak up on him and surprise him. Plus, I could record the footage, which was better quality than I thought it would be, for future use. Ebo can also track subjects, recognizing humans and pets, and following whichever one you select. When Ebo runs low on power it will take itself back to the dock, muttering ‘I’m going home to charge’ as it goes. When it can’t reach the dock, like all good robots it will alert you through the mobile app and you can solve the problem. Sometimes that is easier said than done, especially with the aforementioned four-year-old who has a mischievous streak a mile wide. Places I have found Ebo include random toyboxes in the playroom, a school backpack hung on the back of the door, under the sofa cushions in the living room, and once, memorably, in the fridge beside the milk. I swear the small heart shone with gratitude when I rescued it from that one.",
                Category : "Technology",
                Date : " May 05 2022",
                tags: ["Home Science", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 10,
                Author : "Local News",
                Image : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/crypto_0_1200x768.jpeg?ARzhHNDhzEZFvnu5WhxQzN1ByhyorYwm&size=770:433",
                Title : "Crypto can't be stopped, there's need for regulation",
                Body : "With an understanding that crypto cannot be stopped in the country, the Members of Parliament (MPs) on Monday during a Parliamentary panel meet said that there is a need for regulation. While flagging off full-page crypto advertisements in national dailies, MPs said that the security of investors money is the most serious concern for all members.This is almost like the Ponzi scheme which got strong legal regulations later, MPs said, adding that El Salvador is the only country to legalise crypto so far.",
                Category : "Technology",
                Date : " November 16 2021",
                tags: ["Crypto", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 11,
                Author : "THE TIMES OF INDIA",
                Image : "https://erepublic.brightspotcdn.com/dims4/default/996d2ba/2147483647/strip/false/crop/7669x4314+0+0/resize/1486x836!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.amazonaws.com%2Fe5%2F43%2F0e5edf23414ca362efb8dac52c0b%2Fshutterstock-1183499047.jpg",
                Title : "When will 5G services launch in India?",
                Body : "Have a 5G phone but don’t know when you will be able to put your phone’s capability to the best use? Worry no more as India could get 5G services as early as this year. The Department of Telecommunications (DoT) has confirmed that 5G services will launch in India in 2022. The DoT has also revealed that the 5G services will be made available in 13 Indian cities in the beginning. It will then be rolled out in remaining cities. ‘Costing Rs 224 crore, the project is likely to be completed by December 31, 2021, paving the way for end-to-end testing of 5G (/topic/5g) User Equipment’s (UEs) and network equipment by 5G (/topic/5g) stakeholders developing 5G (/topic/5g) products/services/use cases, including indigenous start-ups, SMEs, Academia and Industry in the country,’ DoT said in an official statement. The telecommunications department said that the 13 cities that will get 5G services include Ahmedabad, Bengaluru, Chandigarh, Gandhinagar, Gurugram, Hyderabad, Jamnagar, Kolkata, Chennai, Lucknow, Pune, Delhi, and Mumbai. The DoT had previously said that it would complete the 5G project by December 31, 2021. Telecom Minister Ashwini Vaishnaw had announced that the government is expected to hold the auction of the 5G spectrum, including airwaves, in early June. Post the auction, the government may finally start rolling out 5G services to people in the 13 cities in August and September this year. The DoT has not revealed which telecom operator among Jio, Vodafone and Airtel will roll out the 5G services first. However, all the three telecom operators are expected to launch their 5G services around the same time. As per reports, Jio, Airtel and even Vodafone have already set up their trial sites in the 13 cities that are expected to get 5G services. As per reports, Airtel and Jio have claimed to be the first operators to roll out 5G services in India. Airtel's Bharti Mittal has confirmed that the company’s 5G network is ready and it will roll out soon after the auction is completed. ‘Yes, you will get faster speeds but they will be there. There is a desire of the government to start 5G soon, right? As soon as the recommendations come and auctions happen, within months I would say you will have early 5G networks coming up and Airtel has been getting ready for the same,’ Mittal had told ET Telecom in an interview.",
                Category : "Technology",
                Date : " May 03 2022",
                tags: ["Features", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 12,
                Author : "THE TIMES OF INDIA",
                Image : "https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/12/dak-pay-india-post-payment-bank-app.jpg?fit=1998%2C1140&ssl=1",
                Title : "India is gearing up for a post-UPI digital payments revolution",
                Body : "There is a wide consensus in the financial world that India’s Unified Payments Interface (UPI) is one of the biggest and most impactful financial technology innovations to have come out in the world. Most nations still do not have an equivalent or similar system for free and real-time interbank payments and a growing number of them are actively evaluating implementing UPI in their own jurisdictions.<br /> Now, two new fintech innovations from RBI are likely to even surpass UPI in their grassroot impact; bringing all the benefits and advantages of digital payments to a whole new class of users who do not have stable Internet at all times; or are feature phone users without any mobile Internet connectivity. According to a 2020 WEF report, nearly 700 million people in India are still unconnected, which translates to about 50% of the country’s population still not having internet access. <br />Early in January, the Reserve Bank of India released its framework to allow offline digital payments of up to ?200 per transaction with an overall limit of ?2,000. This framework allows digital payments to take place without Internet connectivity (offline mode), which is a huge boon for building greater trust in digital payments in remote, rural or semi-urban areas that often suffer from poor mobile Internet connectivity. <br />To protect consumer safety, RBI has not only set a reasonable limit, but also mandated that these transactions must be conducted only in face-to-face mode (in the presence of the account owner or beneficiary). However, they can still be made using any of the popular payment channels or modes including debit cards, wallets or mobile devices. As the transactions are offline, users will receive SMS or email alerts when they are connected to a network. Further, these transactions will not require an OTP or any other Additional Factor of Authentication (AFA). <br />In the case of smartphones, the offline digital payments could be enabled through an ‘on-device’ wallet inside the user’s favorite UPI app. Recall that in December last year, RBI had proposed to enable wallets in UPI apps specifically for low-value transactions, in order to conserve banks’ system resources, without any change in the transaction experience for the user.",
                Category : "Technology",
                Date : " April 09 2022",
                tags: ["UPI", "India"],
                readtime: "5 mins read"
            },



            
            {
                ID : 1,
                Author : "CINEMABLEND",
                Image : "https://www.denofgeek.com/wp-content/uploads/2021/07/the-twilight-saga-movie-watch-order.jpeg?resize=768%2C432",
                Title : "Twilight’s Kellan Lutz Recalls Working With Nikki Reed And Filming Their ‘Sensual’ Kissing Scene In Breaking Dawn",
                Body : "Kellan Lutz and Nikki Reed played vampire couple Emmett Cullen and Rosalie Hale in all five Twilight movies. And apparently, the chemistry was as palpable on set as it looked on screen. As Lutz recently reflected: Kellan Lutz also revealed at one point he had a thing for Ashley Greene before she became “one of the guys” on set. Greene shared that she thinks the pair “pretty quickly” moved to being friends, which she’s totally fine with because she’s able to remain friends with each other and other castmates. By remaining more like friends or family with one another, Greene and Lutz bonded on being able to “be there” for one another and ask each other for advice during their mega stardom Of course, Kristen Stewart and Robert Pattinson, who shared an interesting audition experience, were the hottest couple on the Twilight franchise and dated throughout the movies. Unfortunately for them, that also meant there was an added spotlight on them, and they were constantly the object of paparazzi’s affection. After the franchise ended, Kristen Stewart has found love in Dylan Meyer, who she is engaged to be married to. Kellan Lutz is married as well and welcomed his first daughter a little over a year ago. Nikki Reed is married to Vampire Diaries actor Ian Somerhalder, and they have a daughter as well. Meanwhile, Ashley Greene has been married to Paul Khoury since 2018 and announced last week she is pregnant with her first child. As it turns out, there are a lot of happy endings for the Twilight cast, even if they weren't actually with each other. Sure, it's fun to relive their steamy moments on camera, but it's great knowing many of them have found that special someone. Those who want to revisit the films and those fictional relationships, though, can do so with a Hulu subscription now.",
                Category : "Hollywood",
                Date : " April 03 2022",
                tags: ["CINEMABLEND", "Hollywood"],
                readtime: "5 mins read"
            },
            {
                ID : 2,
                Author : "James Bond",
                Image : "https://www.bollywoodhungama.com/wp-content/uploads/2021/09/No-Time-To-Die-to-be-the-FIRST-James-Bond-film-to-release-in-3D-expected-to-be-the-BIGGEST-Hollywood-release-post-pandemic-in-India.jpg",
                Title : "No Time To Die Released",
                Body : "James Bond is a fictional character created by novelist Ian Fleming in 1953. A British secret agent working for MI6 under the codename 007, he has been portrayed on film by actors Sean Connery, David Niven, George Lazenby, Roger Moore, Timothy Dalton, Pierce Brosnan, and Daniel Craig in twenty-seven productions.",
                Category : "Hollywood",
                Date : " August 21 2021",
                tags: ["007", "James Bond"],
                readtime: "10 mins read"
            },
            {
                ID : 3,
                Author : "Marvel Studio",
                Image : "https://i.ytimg.com/vi/1WfzGDKvwrw/maxresdefault.jpg",
                Title : "Who are the Eternals?",
                Body : "Who are Marvel’s Eternals? What are their powers? What is the role of the Eternals like Ikaris, Sersi, Makkari and Ajak in human evolution in the Marvel universe? What are the origins of the Eternals? How do the Eternals help keep the cosmic balance like Galactus? Why did the Celestials create the Deviant race in the first place? Could we see The Horde fight The Celestials soon in the MCU? MasterTainment explains the origins and cosmic role of Marvel’s Eternals!",
                Category : "Hollywood",
                Date : " November 11 2021",
                tags: ["Marvel", "Avengers"],
                readtime: "5 mins read"
            },
            {
                ID : 4,
                Author : "Brajeswar Ghosh",
                Image : "https://wiwibloggs.com/wp-content/uploads/2022/02/Cornelia-Jakobs-Hold-Me-Closer-Sweden-Eurovision-2022.jpg",
                Title : "“I found the right one at the wrong time” — Cornelia Jakobs’ “Hold Me Closer” lyrics lament the turmoil of a breakup",
                Body : "In 2011 and 2012, she participated as part of girl group Love Generation, and in 2021 she returned as one of the songwriters behind Efraim Leo’s “Best of Me”. Cornelia is the daughter of The Poodles’ Jakob Samuels — who took on the Melfest challenge in 2006 and 2008 — and has been surrounded by music all her life. Since she was just seven years old, she found her forte on the stage and grew up playing in various rock bands throughout middle school. Cornelia’s discography already boasts nine singles, with her debut studio album set for release soon. “Hold Me Closer” is about the emotional turmoil of working through a difficult breakup. Cornelia Jakobs sings about wanting to hold on to her significant other for as long as possible, even though she knows their relationship is coming to an end. With lyrics such as “I found the right one at the wrong time” and “guess all the good things come to an end”, Cornelia laments the happenstance and spontaneity of love.",
                Category : "Hollywood",
                Date : " March 09 2022",
                tags: ["Hollywood", "Hollywood"],
                readtime: "5 mins read"
            },
            {
                ID : 5,
                Author : "CINEMABLEND",
                Image : "https://www.denofgeek.com/wp-content/uploads/2021/07/the-twilight-saga-movie-watch-order.jpeg?resize=768%2C432",
                Title : "Twilight’s Kellan Lutz Recalls Working With Nikki Reed And Filming Their ‘Sensual’ Kissing Scene In Breaking Dawn",
                Body : "Kellan Lutz and Nikki Reed played vampire couple Emmett Cullen and Rosalie Hale in all five Twilight movies. And apparently, the chemistry was as palpable on set as it looked on screen. As Lutz recently reflected: Kellan Lutz also revealed at one point he had a thing for Ashley Greene before she became “one of the guys” on set. Greene shared that she thinks the pair “pretty quickly” moved to being friends, which she’s totally fine with because she’s able to remain friends with each other and other castmates. By remaining more like friends or family with one another, Greene and Lutz bonded on being able to “be there” for one another and ask each other for advice during their mega stardom Of course, Kristen Stewart and Robert Pattinson, who shared an interesting audition experience, were the hottest couple on the Twilight franchise and dated throughout the movies. Unfortunately for them, that also meant there was an added spotlight on them, and they were constantly the object of paparazzi’s affection. After the franchise ended, Kristen Stewart has found love in Dylan Meyer, who she is engaged to be married to. Kellan Lutz is married as well and welcomed his first daughter a little over a year ago. Nikki Reed is married to Vampire Diaries actor Ian Somerhalder, and they have a daughter as well. Meanwhile, Ashley Greene has been married to Paul Khoury since 2018 and announced last week she is pregnant with her first child. As it turns out, there are a lot of happy endings for the Twilight cast, even if they weren't actually with each other. Sure, it's fun to relive their steamy moments on camera, but it's great knowing many of them have found that special someone. Those who want to revisit the films and those fictional relationships, though, can do so with a Hulu subscription now.",
                Category : "Hollywood",
                Date : " April 03 2022",
                tags: ["CINEMABLEND", "Hollywood"],
                readtime: "5 mins read"
            },
            {
                ID : 6,
                Author : "RYAN NORTHRUP",
                Image : "https://static2.srcdn.com/wordpress/wp-content/uploads/2021/01/Fast-and-Furious-9-Vin-Diesel-Muscles.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
                Title : "How The Fast & Furious Franchise's Future Could Look Very Different",
                Body : "Fast & Furious producer Neal Moritz explains how the franchise could look very different after the upcoming 10th and 11th films. Starting back in 2001 with The Fast and the Furious, the Fast & Furious franchise has now been going strong for over twenty years and holds ten films, including one spin-off movie, Hobbs and Shaw. The franchise, which stars Vin Diesel as street racer turned action hero Dominic Toretto, is renowned for its massive action sequences and elaborate car chases. Ahead of last year's release of F9: The Fast Saga, it was announced that the main franchise would end with the upcoming tenth film, which is to be split into two parts. Excitement is already building surrounding the upcoming Fast & Furious 10, which has recently added Jason Momoa to the cast as a villain, and Brie Larson in an unknown role. In addition to Diesel, Momoa, and Larson, much of the rest of the original Fast & Furious cast is expected to return, including Michelle Rodriguez, Nathalie Emmanuel, Tyrese Gibson, Ludacris, Sung Kang, Jordana Brewster, and John Cena. In a new interview on The Town with Matthew Belloni podcast, Moritz reveals what he would like to see for the Fast & Furious franchise following the conclusion of the Fast Saga. In a move that many might not expect, Moritz explains that he'd actually like to see the franchise become smaller and more contained instead of going bigger. Moritz says that he'd like to go back to the spirit of the original films. Check out Moritz's full comment below: As is often lovingly pointed out by fans, Fast & Furious started off as a franchise about street racing and now has cars flying between buildings and, in F9: The Fast Saga, even going into space. Each entry in the franchise currently seems to try to go bigger and bolder than the previous installment, which, eventually, will mean that the stakes simply can't go any higher. Although he does have a few thoughts about where Fast & Furious could go following the conclusion of the Fast Saga, Moritz stresses that, right now, his focus is to make sure the next installment is good, saying, Let's make a great movie and then we will figure out the next one. For many, some of the antics in the more recent Fast & Furious films are already too far beyond the realm of believability, making a move back to a more grounded street racing of the earlier films seem like a tantalizing proposition. It remains to be seen what will become of Dom and the rest of the crew in Fast & Furious 10, but it certainly sounds like the upcoming two installments will serve as a sendoff for the characters. With the Fast & Furious franchise potentially going smaller rather than bigger in the future, it might also be the perfect time to introduce a brand new cast of characters for audiences to root for.",
                Category : "Hollywood",
                Date : " April 14 2022",
                tags: ["Fast & Furious", "Hollywood"],
                readtime: "5 mins read"
            },
            {
                ID : 7,
                Author : "CINEMABLEND",
                Image : "https://www.denofgeek.com/wp-content/uploads/2021/07/the-twilight-saga-movie-watch-order.jpeg?resize=768%2C432",
                Title : "Twilight’s Kellan Lutz Recalls Working With Nikki Reed And Filming Their ‘Sensual’ Kissing Scene In Breaking Dawn",
                Body : "Kellan Lutz and Nikki Reed played vampire couple Emmett Cullen and Rosalie Hale in all five Twilight movies. And apparently, the chemistry was as palpable on set as it looked on screen. As Lutz recently reflected: Kellan Lutz also revealed at one point he had a thing for Ashley Greene before she became “one of the guys” on set. Greene shared that she thinks the pair “pretty quickly” moved to being friends, which she’s totally fine with because she’s able to remain friends with each other and other castmates. By remaining more like friends or family with one another, Greene and Lutz bonded on being able to “be there” for one another and ask each other for advice during their mega stardom Of course, Kristen Stewart and Robert Pattinson, who shared an interesting audition experience, were the hottest couple on the Twilight franchise and dated throughout the movies. Unfortunately for them, that also meant there was an added spotlight on them, and they were constantly the object of paparazzi’s affection. After the franchise ended, Kristen Stewart has found love in Dylan Meyer, who she is engaged to be married to. Kellan Lutz is married as well and welcomed his first daughter a little over a year ago. Nikki Reed is married to Vampire Diaries actor Ian Somerhalder, and they have a daughter as well. Meanwhile, Ashley Greene has been married to Paul Khoury since 2018 and announced last week she is pregnant with her first child. As it turns out, there are a lot of happy endings for the Twilight cast, even if they weren't actually with each other. Sure, it's fun to relive their steamy moments on camera, but it's great knowing many of them have found that special someone. Those who want to revisit the films and those fictional relationships, though, can do so with a Hulu subscription now.",
                Category : "Hollywood",
                Date : " April 03 2022",
                tags: ["CINEMABLEND", "Hollywood"],
                readtime: "5 mins read"
            },
            {
                ID : 8,
                Author : "James Bond",
                Image : "https://www.bollywoodhungama.com/wp-content/uploads/2021/09/No-Time-To-Die-to-be-the-FIRST-James-Bond-film-to-release-in-3D-expected-to-be-the-BIGGEST-Hollywood-release-post-pandemic-in-India.jpg",
                Title : "No Time To Die Released",
                Body : "James Bond is a fictional character created by novelist Ian Fleming in 1953. A British secret agent working for MI6 under the codename 007, he has been portrayed on film by actors Sean Connery, David Niven, George Lazenby, Roger Moore, Timothy Dalton, Pierce Brosnan, and Daniel Craig in twenty-seven productions.",
                Category : "Hollywood",
                Date : " August 21 2021",
                tags: ["007", "James Bond"],
                readtime: "10 mins read"
            },
            {
                ID : 9,
                Author : "Marvel Studio",
                Image : "https://i.ytimg.com/vi/1WfzGDKvwrw/maxresdefault.jpg",
                Title : "Who are the Eternals?",
                Body : "Who are Marvel’s Eternals? What are their powers? What is the role of the Eternals like Ikaris, Sersi, Makkari and Ajak in human evolution in the Marvel universe? What are the origins of the Eternals? How do the Eternals help keep the cosmic balance like Galactus? Why did the Celestials create the Deviant race in the first place? Could we see The Horde fight The Celestials soon in the MCU? MasterTainment explains the origins and cosmic role of Marvel’s Eternals!",
                Category : "Hollywood",
                Date : " November 11 2021",
                tags: ["Marvel", "Avengers"],
                readtime: "5 mins read"
            },
            {
                ID : 10,
                Author : "Brajeswar Ghosh",
                Image : "https://wiwibloggs.com/wp-content/uploads/2022/02/Cornelia-Jakobs-Hold-Me-Closer-Sweden-Eurovision-2022.jpg",
                Title : "“I found the right one at the wrong time” — Cornelia Jakobs’ “Hold Me Closer” lyrics lament the turmoil of a breakup",
                Body : "In 2011 and 2012, she participated as part of girl group Love Generation, and in 2021 she returned as one of the songwriters behind Efraim Leo’s “Best of Me”. Cornelia is the daughter of The Poodles’ Jakob Samuels — who took on the Melfest challenge in 2006 and 2008 — and has been surrounded by music all her life. Since she was just seven years old, she found her forte on the stage and grew up playing in various rock bands throughout middle school. Cornelia’s discography already boasts nine singles, with her debut studio album set for release soon. “Hold Me Closer” is about the emotional turmoil of working through a difficult breakup. Cornelia Jakobs sings about wanting to hold on to her significant other for as long as possible, even though she knows their relationship is coming to an end. With lyrics such as “I found the right one at the wrong time” and “guess all the good things come to an end”, Cornelia laments the happenstance and spontaneity of love.",
                Category : "Hollywood",
                Date : " March 09 2022",
                tags: ["Hollywood", "Hollywood"],
                readtime: "5 mins read"
            },
            {
                ID : 11,
                Author : "CINEMABLEND",
                Image : "https://www.denofgeek.com/wp-content/uploads/2021/07/the-twilight-saga-movie-watch-order.jpeg?resize=768%2C432",
                Title : "Twilight’s Kellan Lutz Recalls Working With Nikki Reed And Filming Their ‘Sensual’ Kissing Scene In Breaking Dawn",
                Body : "Kellan Lutz and Nikki Reed played vampire couple Emmett Cullen and Rosalie Hale in all five Twilight movies. And apparently, the chemistry was as palpable on set as it looked on screen. As Lutz recently reflected: Kellan Lutz also revealed at one point he had a thing for Ashley Greene before she became “one of the guys” on set. Greene shared that she thinks the pair “pretty quickly” moved to being friends, which she’s totally fine with because she’s able to remain friends with each other and other castmates. By remaining more like friends or family with one another, Greene and Lutz bonded on being able to “be there” for one another and ask each other for advice during their mega stardom Of course, Kristen Stewart and Robert Pattinson, who shared an interesting audition experience, were the hottest couple on the Twilight franchise and dated throughout the movies. Unfortunately for them, that also meant there was an added spotlight on them, and they were constantly the object of paparazzi’s affection. After the franchise ended, Kristen Stewart has found love in Dylan Meyer, who she is engaged to be married to. Kellan Lutz is married as well and welcomed his first daughter a little over a year ago. Nikki Reed is married to Vampire Diaries actor Ian Somerhalder, and they have a daughter as well. Meanwhile, Ashley Greene has been married to Paul Khoury since 2018 and announced last week she is pregnant with her first child. As it turns out, there are a lot of happy endings for the Twilight cast, even if they weren't actually with each other. Sure, it's fun to relive their steamy moments on camera, but it's great knowing many of them have found that special someone. Those who want to revisit the films and those fictional relationships, though, can do so with a Hulu subscription now.",
                Category : "Hollywood",
                Date : " April 03 2022",
                tags: ["CINEMABLEND", "Hollywood"],
                readtime: "5 mins read"
            },
            {
                ID : 12,
                Author : "RYAN NORTHRUP",
                Image : "https://static2.srcdn.com/wordpress/wp-content/uploads/2021/01/Fast-and-Furious-9-Vin-Diesel-Muscles.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
                Title : "How The Fast & Furious Franchise's Future Could Look Very Different",
                Body : "Fast & Furious producer Neal Moritz explains how the franchise could look very different after the upcoming 10th and 11th films. Starting back in 2001 with The Fast and the Furious, the Fast & Furious franchise has now been going strong for over twenty years and holds ten films, including one spin-off movie, Hobbs and Shaw. The franchise, which stars Vin Diesel as street racer turned action hero Dominic Toretto, is renowned for its massive action sequences and elaborate car chases. Ahead of last year's release of F9: The Fast Saga, it was announced that the main franchise would end with the upcoming tenth film, which is to be split into two parts. Excitement is already building surrounding the upcoming Fast & Furious 10, which has recently added Jason Momoa to the cast as a villain, and Brie Larson in an unknown role. In addition to Diesel, Momoa, and Larson, much of the rest of the original Fast & Furious cast is expected to return, including Michelle Rodriguez, Nathalie Emmanuel, Tyrese Gibson, Ludacris, Sung Kang, Jordana Brewster, and John Cena. In a new interview on The Town with Matthew Belloni podcast, Moritz reveals what he would like to see for the Fast & Furious franchise following the conclusion of the Fast Saga. In a move that many might not expect, Moritz explains that he'd actually like to see the franchise become smaller and more contained instead of going bigger. Moritz says that he'd like to go back to the spirit of the original films. Check out Moritz's full comment below: As is often lovingly pointed out by fans, Fast & Furious started off as a franchise about street racing and now has cars flying between buildings and, in F9: The Fast Saga, even going into space. Each entry in the franchise currently seems to try to go bigger and bolder than the previous installment, which, eventually, will mean that the stakes simply can't go any higher. Although he does have a few thoughts about where Fast & Furious could go following the conclusion of the Fast Saga, Moritz stresses that, right now, his focus is to make sure the next installment is good, saying, Let's make a great movie and then we will figure out the next one. For many, some of the antics in the more recent Fast & Furious films are already too far beyond the realm of believability, making a move back to a more grounded street racing of the earlier films seem like a tantalizing proposition. It remains to be seen what will become of Dom and the rest of the crew in Fast & Furious 10, but it certainly sounds like the upcoming two installments will serve as a sendoff for the characters. With the Fast & Furious franchise potentially going smaller rather than bigger in the future, it might also be the perfect time to introduce a brand new cast of characters for audiences to root for.",
                Category : "Hollywood",
                Date : " April 14 2022",
                tags: ["Fast & Furious", "Hollywood"],
                readtime: "5 mins read"
            },




            
            {
                ID : 1,
                Author : "Brajeswar Ghosh",
                Image : "https://post.healthline.com/wp-content/uploads/2020/01/Runner-training-on-running-track-732x549-thumbnail.jpg",
                Title : "Running",
                Body : "Running is an essential component of many sports, from football to cricket. It’s no surprise, then, that regular running workouts, which help improve your stamina, speed, and cardiovascular endurance, can make you a stronger, more adaptable athlete. 10. Running can improve your mental well-being.",
                Category : "Fitness",
                Date : " May 04 2022",
                tags: ["Fitness", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 2,
                Author : "Brajeswar Ghosh",
                Image : "https://media.gettyimages.com/photos/male-gymnast-doing-handstand-on-pommel-horse-picture-id532416167?s=612x612",
                Title : "Gymnastics",
                Body : "Gymnastics, the performance of systematic exercises—often with the use of rings, bars, and other apparatus—either as a competitive sport or to improve strength, agility, coordination, and physical conditioning.",
                Category : "Fitness",
                Date : " April 12 2022",
                tags: ["Fitness", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 3,
                Author : "Brajeswar Ghosh",
                Image : "https://cdn.mos.cms.futurecdn.net/foejuANBeiCtYkT6PaXW9F-1200-80.jpg",
                Title : "Cycling",
                Body : "Cycling is widely regarded as a very effective and efficient mode of transportation optimal for short to moderate distances. Bicycles provide numerous benefits in comparison with motor vehicles, including the sustained physical exercise involved in cycling, easier parking, increased maneuverability, and access to roads, bike paths and rural trails.",
                Category : "Fitness",
                Date : " April 24 2022",
                tags: ["Fitness", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 4,
                Author : "Brajeswar Ghosh",
                Image : "https://post.healthline.com/wp-content/uploads/2020/01/Runner-training-on-running-track-732x549-thumbnail.jpg",
                Title : "Running",
                Body : "Running is an essential component of many sports, from football to cricket. It’s no surprise, then, that regular running workouts, which help improve your stamina, speed, and cardiovascular endurance, can make you a stronger, more adaptable athlete. 10. Running can improve your mental well-being.",
                Category : "Fitness",
                Date : " May 04 2022",
                tags: ["Fitness", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 5,
                Author : "Brajeswar Ghosh",
                Image : "https://static01.nyt.com/images/2016/12/02/well/move/yoga_body_images-slide-NY4R/yoga_body_images-slide-NY4R-superJumbo.jpg",
                Title : "Yoga",
                Body : "Yoga is one of the six orthodox schools of Hindu philosophical traditions. There is a broad variety of yoga schools, practices, and goals in Hinduism, Buddhism, and Jainism. Among the best-known types of yoga are Hatha yoga and Rāja yoga.",
                Category : "Fitness",
                Date : " Sep 15 2022",
                tags: ["Fitness", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 6,
                Author : "Brajeswar Ghosh",
                Image : "https://image.shutterstock.com/image-photo/skateboarder-young-teenager-man-isolated-260nw-519472180.jpg",
                Title : "Skateboarding",
                Body : "Skateboarding is an action sport which involves riding and performing tricks using a skateboard, as well as a recreational activity, an art form, a entertainment industry job, and a method of transportation",
                Category : "Fitness",
                Date : " May 03 2022",
                tags: ["Fitness", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 7,
                Author : "Brajeswar Ghosh",
                Image : "https://post.healthline.com/wp-content/uploads/2020/01/Runner-training-on-running-track-732x549-thumbnail.jpg",
                Title : "Running",
                Body : "Running is an essential component of many sports, from football to cricket. It’s no surprise, then, that regular running workouts, which help improve your stamina, speed, and cardiovascular endurance, can make you a stronger, more adaptable athlete. 10. Running can improve your mental well-being.",
                Category : "Fitness",
                Date : " May 04 2022",
                tags: ["Fitness", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 8,
                Author : "Brajeswar Ghosh",
                Image : "https://media.gettyimages.com/photos/male-gymnast-doing-handstand-on-pommel-horse-picture-id532416167?s=612x612",
                Title : "Gymnastics",
                Body : "Gymnastics, the performance of systematic exercises—often with the use of rings, bars, and other apparatus—either as a competitive sport or to improve strength, agility, coordination, and physical conditioning.",
                Category : "Fitness",
                Date : " April 12 2022",
                tags: ["Fitness", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 9,
                Author : "Brajeswar Ghosh",
                Image : "https://cdn.mos.cms.futurecdn.net/foejuANBeiCtYkT6PaXW9F-1200-80.jpg",
                Title : "Cycling",
                Body : "Cycling is widely regarded as a very effective and efficient mode of transportation optimal for short to moderate distances. Bicycles provide numerous benefits in comparison with motor vehicles, including the sustained physical exercise involved in cycling, easier parking, increased maneuverability, and access to roads, bike paths and rural trails.",
                Category : "Fitness",
                Date : " April 24 2022",
                tags: ["Fitness", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 10,
                Author : "Brajeswar Ghosh",
                Image : "https://post.healthline.com/wp-content/uploads/2020/01/Runner-training-on-running-track-732x549-thumbnail.jpg",
                Title : "Running",
                Body : "Running is an essential component of many sports, from football to cricket. It’s no surprise, then, that regular running workouts, which help improve your stamina, speed, and cardiovascular endurance, can make you a stronger, more adaptable athlete. 10. Running can improve your mental well-being.",
                Category : "Fitness",
                Date : " May 04 2022",
                tags: ["Fitness", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 11,
                Author : "Brajeswar Ghosh",
                Image : "https://static01.nyt.com/images/2016/12/02/well/move/yoga_body_images-slide-NY4R/yoga_body_images-slide-NY4R-superJumbo.jpg",
                Title : "Yoga",
                Body : "Yoga is one of the six orthodox schools of Hindu philosophical traditions. There is a broad variety of yoga schools, practices, and goals in Hinduism, Buddhism, and Jainism. Among the best-known types of yoga are Hatha yoga and Rāja yoga.",
                Category : "Fitness",
                Date : " Sep 15 2022",
                tags: ["Fitness", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 12,
                Author : "Brajeswar Ghosh",
                Image : "https://image.shutterstock.com/image-photo/skateboarder-young-teenager-man-isolated-260nw-519472180.jpg",
                Title : "Skateboarding",
                Body : "Skateboarding is an action sport which involves riding and performing tricks using a skateboard, as well as a recreational activity, an art form, a entertainment industry job, and a method of transportation",
                Category : "Fitness",
                Date : " May 03 2022",
                tags: ["Fitness", "India"],
                readtime: "5 mins read"
            },




            {
                ID : 1,
                Author : "Delish",
                Image : "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/dqptuh4dfasrbggsbvss",
                Title : "Food bloggers in city creating buzz on social media",
                Body : "Kolkata : Food Instagramming is becoming a popular trend in the city and the youth are making  the most of it. The love for food and photography can bring you to food blogging  and some youngsters in town have taken the game onto a whole new level with variety of  food pictures and videos making it to their Facebook feed. A snap of cheese-burst burger to street-style pani puri they have got it all covered and you may want to visit their social media handles before planning an outing.Neha Rahate, who started food blogging in Kolkata in 2020, is a doctor. His passion for food brought his into this creative field. His Facebook page Tongue and Scissors and has more than 23,000 followers. CI was the first food blogger in Kolkata. I love the kind of response the audience here has given me on my page. The turning point for me was when I got featured in Femina, he said. Shubhra Paul, from Gastronomicjournal, has over 27,000 followers on his Facebook food page. He started almost a year back and gets a massive response of food lovers drooling over some tempting food pictures on his feed. CI have always been a big-time foodie. I weighted around 70kg a few years back. I sweated hard and reduced my weight by around 30kg. My passion for food hasn't dropped though. I have maintained a healthy balance between my passion and physical health by working hard on my fitness. I love my work and am planning to start a YouTube channel soon, he said.Parth Bajaj, who also runs a YouTube channel, has recently made a kitchen studio and has over 42,000 food lovers following him. His interest lies in food blogging, styling and photography, and is also a self-taught baker. CI want to make blogging as my full time profession. Food culture in Kolkata has changed so much and now there are a variety of new places to go and try out new food. I absolutely love my work and food always makes me happy, said Parth.Girly and Gluttony belongs to an aspiring mechanical engineer Twinkle Borkar who is marching towards 13,000 followers. His feed has a good amount of sweet and savoury food pictures on display from mocktails to goti soda and gourmet to street food. During my college days, I started exploring new eateries in Kolkata, clicking picture of the dish and saving it, slowly I realized I have so many pictures of food in my gallery, on a suggestion of one of my friends I started my blog page. I enjoy blogging, it reveals my girlie personality ,said Twinkle.",
                Category : "Food",
                Date : " December 23, 2020",
                tags: ["Food", "India"],
                readtime: "6 mins read"
            },
            {
                ID : 2,
                Author : "Delish",
                Image : "https://static.toiimg.com/photo/msid-77563051/77563051.jpg?471818",
                Title : "Food bloggers in city creating buzz on social media",
                Body : "Kolkata : Food Instagramming is becoming a popular trend in the city and the youth are making  the most of it. The love for food and photography can bring you to food blogging  and some youngsters in town have taken the game onto a whole new level with variety of  food pictures and videos making it to their Facebook feed. A snap of cheese-burst burger to street-style pani puri they have got it all covered and you may want to visit their social media handles before planning an outing.Neha Rahate, who started food blogging in Kolkata in 2020, is a doctor. His passion for food brought his into this creative field. His Facebook page Tongue and Scissors and has more than 23,000 followers. CI was the first food blogger in Kolkata. I love the kind of response the audience here has given me on my page. The turning point for me was when I got featured in Femina, he said. Shubhra Paul, from Gastronomicjournal, has over 27,000 followers on his Facebook food page. He started almost a year back and gets a massive response of food lovers drooling over some tempting food pictures on his feed. CI have always been a big-time foodie. I weighted around 70kg a few years back. I sweated hard and reduced my weight by around 30kg. My passion for food hasn't dropped though. I have maintained a healthy balance between my passion and physical health by working hard on my fitness. I love my work and am planning to start a YouTube channel soon, he said.Parth Bajaj, who also runs a YouTube channel, has recently made a kitchen studio and has over 42,000 food lovers following him. His interest lies in food blogging, styling and photography, and is also a self-taught baker. CI want to make blogging as my full time profession. Food culture in Kolkata has changed so much and now there are a variety of new places to go and try out new food. I absolutely love my work and food always makes me happy, said Parth.Girly and Gluttony belongs to an aspiring mechanical engineer Twinkle Borkar who is marching towards 13,000 followers. His feed has a good amount of sweet and savoury food pictures on display from mocktails to goti soda and gourmet to street food. During my college days, I started exploring new eateries in Kolkata, clicking picture of the dish and saving it, slowly I realized I have so many pictures of food in my gallery, on a suggestion of one of my friends I started my blog page. I enjoy blogging, it reveals my girlie personality ,said Twinkle.",
                Category : "Food",
                Date : " December 23, 2020",
                tags: ["Food", "India"],
                readtime: "6 mins read"
            },
            {
                ID : 3,
                Author : "Delish",
                Image : "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/shutterstock_4148348021.jpg",
                Title : "Food bloggers in city creating buzz on social media",
                Body : "Kolkata : Food Instagramming is becoming a popular trend in the city and the youth are making  the most of it. The love for food and photography can bring you to food blogging  and some youngsters in town have taken the game onto a whole new level with variety of  food pictures and videos making it to their Facebook feed. A snap of cheese-burst burger to street-style pani puri they have got it all covered and you may want to visit their social media handles before planning an outing.Neha Rahate, who started food blogging in Kolkata in 2020, is a doctor. His passion for food brought his into this creative field. His Facebook page Tongue and Scissors and has more than 23,000 followers. CI was the first food blogger in Kolkata. I love the kind of response the audience here has given me on my page. The turning point for me was when I got featured in Femina, he said. Shubhra Paul, from Gastronomicjournal, has over 27,000 followers on his Facebook food page. He started almost a year back and gets a massive response of food lovers drooling over some tempting food pictures on his feed. CI have always been a big-time foodie. I weighted around 70kg a few years back. I sweated hard and reduced my weight by around 30kg. My passion for food hasn't dropped though. I have maintained a healthy balance between my passion and physical health by working hard on my fitness. I love my work and am planning to start a YouTube channel soon, he said.Parth Bajaj, who also runs a YouTube channel, has recently made a kitchen studio and has over 42,000 food lovers following him. His interest lies in food blogging, styling and photography, and is also a self-taught baker. CI want to make blogging as my full time profession. Food culture in Kolkata has changed so much and now there are a variety of new places to go and try out new food. I absolutely love my work and food always makes me happy, said Parth.Girly and Gluttony belongs to an aspiring mechanical engineer Twinkle Borkar who is marching towards 13,000 followers. His feed has a good amount of sweet and savoury food pictures on display from mocktails to goti soda and gourmet to street food. During my college days, I started exploring new eateries in Kolkata, clicking picture of the dish and saving it, slowly I realized I have so many pictures of food in my gallery, on a suggestion of one of my friends I started my blog page. I enjoy blogging, it reveals my girlie personality ,said Twinkle.",
                Category : "Food",
                Date : " December 23, 2020",
                tags: ["Food", "India"],
                readtime: "6 mins read"
            },
            {
                ID : 4,
                Author : "Delish",
                Image : "https://www.phillymag.com/wp-content/uploads/sites/3/2019/02/best-indian-restaurant-philadelphia.jpg",
                Title : "Food bloggers in city creating buzz on social media",
                Body : "Kolkata : Food Instagramming is becoming a popular trend in the city and the youth are making  the most of it. The love for food and photography can bring you to food blogging  and some youngsters in town have taken the game onto a whole new level with variety of  food pictures and videos making it to their Facebook feed. A snap of cheese-burst burger to street-style pani puri they have got it all covered and you may want to visit their social media handles before planning an outing.Neha Rahate, who started food blogging in Kolkata in 2020, is a doctor. His passion for food brought his into this creative field. His Facebook page Tongue and Scissors and has more than 23,000 followers. CI was the first food blogger in Kolkata. I love the kind of response the audience here has given me on my page. The turning point for me was when I got featured in Femina, he said. Shubhra Paul, from Gastronomicjournal, has over 27,000 followers on his Facebook food page. He started almost a year back and gets a massive response of food lovers drooling over some tempting food pictures on his feed. CI have always been a big-time foodie. I weighted around 70kg a few years back. I sweated hard and reduced my weight by around 30kg. My passion for food hasn't dropped though. I have maintained a healthy balance between my passion and physical health by working hard on my fitness. I love my work and am planning to start a YouTube channel soon, he said.Parth Bajaj, who also runs a YouTube channel, has recently made a kitchen studio and has over 42,000 food lovers following him. His interest lies in food blogging, styling and photography, and is also a self-taught baker. CI want to make blogging as my full time profession. Food culture in Kolkata has changed so much and now there are a variety of new places to go and try out new food. I absolutely love my work and food always makes me happy, said Parth.Girly and Gluttony belongs to an aspiring mechanical engineer Twinkle Borkar who is marching towards 13,000 followers. His feed has a good amount of sweet and savoury food pictures on display from mocktails to goti soda and gourmet to street food. During my college days, I started exploring new eateries in Kolkata, clicking picture of the dish and saving it, slowly I realized I have so many pictures of food in my gallery, on a suggestion of one of my friends I started my blog page. I enjoy blogging, it reveals my girlie personality ,said Twinkle.",
                Category : "Food",
                Date : " December 23, 2020",
                tags: ["Food", "India"],
                readtime: "6 mins read"
            },
            {
                ID : 5,
                Author : "Delish",
                Image : "https://media.istockphoto.com/photos/hands-of-cook-photographing-mexican-tacos-picture-id1241881284?k=20&m=1241881284&s=170667a&w=0&h=ffaDRwD-w86TgaUuIieNFQTkSj5G-OtnRvuwcN3kguY=",
                Title : "Food bloggers in city creating buzz on social media",
                Body : "Kolkata : Food Instagramming is becoming a popular trend in the city and the youth are making  the most of it. The love for food and photography can bring you to food blogging  and some youngsters in town have taken the game onto a whole new level with variety of  food pictures and videos making it to their Facebook feed. A snap of cheese-burst burger to street-style pani puri they have got it all covered and you may want to visit their social media handles before planning an outing.Neha Rahate, who started food blogging in Kolkata in 2020, is a doctor. His passion for food brought his into this creative field. His Facebook page Tongue and Scissors and has more than 23,000 followers. CI was the first food blogger in Kolkata. I love the kind of response the audience here has given me on my page. The turning point for me was when I got featured in Femina, he said. Shubhra Paul, from Gastronomicjournal, has over 27,000 followers on his Facebook food page. He started almost a year back and gets a massive response of food lovers drooling over some tempting food pictures on his feed. CI have always been a big-time foodie. I weighted around 70kg a few years back. I sweated hard and reduced my weight by around 30kg. My passion for food hasn't dropped though. I have maintained a healthy balance between my passion and physical health by working hard on my fitness. I love my work and am planning to start a YouTube channel soon, he said.Parth Bajaj, who also runs a YouTube channel, has recently made a kitchen studio and has over 42,000 food lovers following him. His interest lies in food blogging, styling and photography, and is also a self-taught baker. CI want to make blogging as my full time profession. Food culture in Kolkata has changed so much and now there are a variety of new places to go and try out new food. I absolutely love my work and food always makes me happy, said Parth.Girly and Gluttony belongs to an aspiring mechanical engineer Twinkle Borkar who is marching towards 13,000 followers. His feed has a good amount of sweet and savoury food pictures on display from mocktails to goti soda and gourmet to street food. During my college days, I started exploring new eateries in Kolkata, clicking picture of the dish and saving it, slowly I realized I have so many pictures of food in my gallery, on a suggestion of one of my friends I started my blog page. I enjoy blogging, it reveals my girlie personality ,said Twinkle.",
                Category : "Food",
                Date : " December 23, 2020",
                tags: ["Food", "India"],
                readtime: "6 mins read"
            },
            {
                ID : 6,
                Author : "Delish",
                Image : "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/dqptuh4dfasrbggsbvss",
                Title : "Food bloggers in city creating buzz on social media",
                Body : "Kolkata : Food Instagramming is becoming a popular trend in the city and the youth are making  the most of it. The love for food and photography can bring you to food blogging  and some youngsters in town have taken the game onto a whole new level with variety of  food pictures and videos making it to their Facebook feed. A snap of cheese-burst burger to street-style pani puri they have got it all covered and you may want to visit their social media handles before planning an outing.Neha Rahate, who started food blogging in Kolkata in 2020, is a doctor. His passion for food brought his into this creative field. His Facebook page Tongue and Scissors and has more than 23,000 followers. CI was the first food blogger in Kolkata. I love the kind of response the audience here has given me on my page. The turning point for me was when I got featured in Femina, he said. Shubhra Paul, from Gastronomicjournal, has over 27,000 followers on his Facebook food page. He started almost a year back and gets a massive response of food lovers drooling over some tempting food pictures on his feed. CI have always been a big-time foodie. I weighted around 70kg a few years back. I sweated hard and reduced my weight by around 30kg. My passion for food hasn't dropped though. I have maintained a healthy balance between my passion and physical health by working hard on my fitness. I love my work and am planning to start a YouTube channel soon, he said.Parth Bajaj, who also runs a YouTube channel, has recently made a kitchen studio and has over 42,000 food lovers following him. His interest lies in food blogging, styling and photography, and is also a self-taught baker. CI want to make blogging as my full time profession. Food culture in Kolkata has changed so much and now there are a variety of new places to go and try out new food. I absolutely love my work and food always makes me happy, said Parth.Girly and Gluttony belongs to an aspiring mechanical engineer Twinkle Borkar who is marching towards 13,000 followers. His feed has a good amount of sweet and savoury food pictures on display from mocktails to goti soda and gourmet to street food. During my college days, I started exploring new eateries in Kolkata, clicking picture of the dish and saving it, slowly I realized I have so many pictures of food in my gallery, on a suggestion of one of my friends I started my blog page. I enjoy blogging, it reveals my girlie personality ,said Twinkle.",
                Category : "Food",
                Date : " December 23, 2020",
                tags: ["Food", "India"],
                readtime: "6 mins read"
            },
            {
                ID : 7,
                Author : "Delish",
                Image : "https://static.toiimg.com/photo/msid-77563051/77563051.jpg?471818",
                Title : "Food bloggers in city creating buzz on social media",
                Body : "Kolkata : Food Instagramming is becoming a popular trend in the city and the youth are making  the most of it. The love for food and photography can bring you to food blogging  and some youngsters in town have taken the game onto a whole new level with variety of  food pictures and videos making it to their Facebook feed. A snap of cheese-burst burger to street-style pani puri they have got it all covered and you may want to visit their social media handles before planning an outing.Neha Rahate, who started food blogging in Kolkata in 2020, is a doctor. His passion for food brought his into this creative field. His Facebook page Tongue and Scissors and has more than 23,000 followers. CI was the first food blogger in Kolkata. I love the kind of response the audience here has given me on my page. The turning point for me was when I got featured in Femina, he said. Shubhra Paul, from Gastronomicjournal, has over 27,000 followers on his Facebook food page. He started almost a year back and gets a massive response of food lovers drooling over some tempting food pictures on his feed. CI have always been a big-time foodie. I weighted around 70kg a few years back. I sweated hard and reduced my weight by around 30kg. My passion for food hasn't dropped though. I have maintained a healthy balance between my passion and physical health by working hard on my fitness. I love my work and am planning to start a YouTube channel soon, he said.Parth Bajaj, who also runs a YouTube channel, has recently made a kitchen studio and has over 42,000 food lovers following him. His interest lies in food blogging, styling and photography, and is also a self-taught baker. CI want to make blogging as my full time profession. Food culture in Kolkata has changed so much and now there are a variety of new places to go and try out new food. I absolutely love my work and food always makes me happy, said Parth.Girly and Gluttony belongs to an aspiring mechanical engineer Twinkle Borkar who is marching towards 13,000 followers. His feed has a good amount of sweet and savoury food pictures on display from mocktails to goti soda and gourmet to street food. During my college days, I started exploring new eateries in Kolkata, clicking picture of the dish and saving it, slowly I realized I have so many pictures of food in my gallery, on a suggestion of one of my friends I started my blog page. I enjoy blogging, it reveals my girlie personality ,said Twinkle.",
                Category : "Food",
                Date : " December 23, 2020",
                tags: ["Food", "India"],
                readtime: "6 mins read"
            },
            {
                ID : 8,
                Author : "Delish",
                Image : "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/shutterstock_4148348021.jpg",
                Title : "Food bloggers in city creating buzz on social media",
                Body : "Kolkata : Food Instagramming is becoming a popular trend in the city and the youth are making  the most of it. The love for food and photography can bring you to food blogging  and some youngsters in town have taken the game onto a whole new level with variety of  food pictures and videos making it to their Facebook feed. A snap of cheese-burst burger to street-style pani puri they have got it all covered and you may want to visit their social media handles before planning an outing.Neha Rahate, who started food blogging in Kolkata in 2020, is a doctor. His passion for food brought his into this creative field. His Facebook page Tongue and Scissors and has more than 23,000 followers. CI was the first food blogger in Kolkata. I love the kind of response the audience here has given me on my page. The turning point for me was when I got featured in Femina, he said. Shubhra Paul, from Gastronomicjournal, has over 27,000 followers on his Facebook food page. He started almost a year back and gets a massive response of food lovers drooling over some tempting food pictures on his feed. CI have always been a big-time foodie. I weighted around 70kg a few years back. I sweated hard and reduced my weight by around 30kg. My passion for food hasn't dropped though. I have maintained a healthy balance between my passion and physical health by working hard on my fitness. I love my work and am planning to start a YouTube channel soon, he said.Parth Bajaj, who also runs a YouTube channel, has recently made a kitchen studio and has over 42,000 food lovers following him. His interest lies in food blogging, styling and photography, and is also a self-taught baker. CI want to make blogging as my full time profession. Food culture in Kolkata has changed so much and now there are a variety of new places to go and try out new food. I absolutely love my work and food always makes me happy, said Parth.Girly and Gluttony belongs to an aspiring mechanical engineer Twinkle Borkar who is marching towards 13,000 followers. His feed has a good amount of sweet and savoury food pictures on display from mocktails to goti soda and gourmet to street food. During my college days, I started exploring new eateries in Kolkata, clicking picture of the dish and saving it, slowly I realized I have so many pictures of food in my gallery, on a suggestion of one of my friends I started my blog page. I enjoy blogging, it reveals my girlie personality ,said Twinkle.",
                Category : "Food",
                Date : " December 23, 2020",
                tags: ["Food", "India"],
                readtime: "6 mins read"
            },
            {
                ID : 9,
                Author : "Delish",
                Image : "https://www.phillymag.com/wp-content/uploads/sites/3/2019/02/best-indian-restaurant-philadelphia.jpg",
                Title : "Food bloggers in city creating buzz on social media",
                Body : "Kolkata : Food Instagramming is becoming a popular trend in the city and the youth are making  the most of it. The love for food and photography can bring you to food blogging  and some youngsters in town have taken the game onto a whole new level with variety of  food pictures and videos making it to their Facebook feed. A snap of cheese-burst burger to street-style pani puri they have got it all covered and you may want to visit their social media handles before planning an outing.Neha Rahate, who started food blogging in Kolkata in 2020, is a doctor. His passion for food brought his into this creative field. His Facebook page Tongue and Scissors and has more than 23,000 followers. CI was the first food blogger in Kolkata. I love the kind of response the audience here has given me on my page. The turning point for me was when I got featured in Femina, he said. Shubhra Paul, from Gastronomicjournal, has over 27,000 followers on his Facebook food page. He started almost a year back and gets a massive response of food lovers drooling over some tempting food pictures on his feed. CI have always been a big-time foodie. I weighted around 70kg a few years back. I sweated hard and reduced my weight by around 30kg. My passion for food hasn't dropped though. I have maintained a healthy balance between my passion and physical health by working hard on my fitness. I love my work and am planning to start a YouTube channel soon, he said.Parth Bajaj, who also runs a YouTube channel, has recently made a kitchen studio and has over 42,000 food lovers following him. His interest lies in food blogging, styling and photography, and is also a self-taught baker. CI want to make blogging as my full time profession. Food culture in Kolkata has changed so much and now there are a variety of new places to go and try out new food. I absolutely love my work and food always makes me happy, said Parth.Girly and Gluttony belongs to an aspiring mechanical engineer Twinkle Borkar who is marching towards 13,000 followers. His feed has a good amount of sweet and savoury food pictures on display from mocktails to goti soda and gourmet to street food. During my college days, I started exploring new eateries in Kolkata, clicking picture of the dish and saving it, slowly I realized I have so many pictures of food in my gallery, on a suggestion of one of my friends I started my blog page. I enjoy blogging, it reveals my girlie personality ,said Twinkle.",
                Category : "Food",
                Date : " December 23, 2020",
                tags: ["Food", "India"],
                readtime: "6 mins read"
            },
            {
                ID : 10,
                Author : "Delish",
                Image : "https://media.istockphoto.com/photos/hands-of-cook-photographing-mexican-tacos-picture-id1241881284?k=20&m=1241881284&s=170667a&w=0&h=ffaDRwD-w86TgaUuIieNFQTkSj5G-OtnRvuwcN3kguY=",
                Title : "Food bloggers in city creating buzz on social media",
                Body : "Kolkata : Food Instagramming is becoming a popular trend in the city and the youth are making  the most of it. The love for food and photography can bring you to food blogging  and some youngsters in town have taken the game onto a whole new level with variety of  food pictures and videos making it to their Facebook feed. A snap of cheese-burst burger to street-style pani puri they have got it all covered and you may want to visit their social media handles before planning an outing.Neha Rahate, who started food blogging in Kolkata in 2020, is a doctor. His passion for food brought his into this creative field. His Facebook page Tongue and Scissors and has more than 23,000 followers. CI was the first food blogger in Kolkata. I love the kind of response the audience here has given me on my page. The turning point for me was when I got featured in Femina, he said. Shubhra Paul, from Gastronomicjournal, has over 27,000 followers on his Facebook food page. He started almost a year back and gets a massive response of food lovers drooling over some tempting food pictures on his feed. CI have always been a big-time foodie. I weighted around 70kg a few years back. I sweated hard and reduced my weight by around 30kg. My passion for food hasn't dropped though. I have maintained a healthy balance between my passion and physical health by working hard on my fitness. I love my work and am planning to start a YouTube channel soon, he said.Parth Bajaj, who also runs a YouTube channel, has recently made a kitchen studio and has over 42,000 food lovers following him. His interest lies in food blogging, styling and photography, and is also a self-taught baker. CI want to make blogging as my full time profession. Food culture in Kolkata has changed so much and now there are a variety of new places to go and try out new food. I absolutely love my work and food always makes me happy, said Parth.Girly and Gluttony belongs to an aspiring mechanical engineer Twinkle Borkar who is marching towards 13,000 followers. His feed has a good amount of sweet and savoury food pictures on display from mocktails to goti soda and gourmet to street food. During my college days, I started exploring new eateries in Kolkata, clicking picture of the dish and saving it, slowly I realized I have so many pictures of food in my gallery, on a suggestion of one of my friends I started my blog page. I enjoy blogging, it reveals my girlie personality ,said Twinkle.",
                Category : "Food",
                Date : " December 23, 2020",
                tags: ["Food", "India"],
                readtime: "6 mins read"
            },
            
            
            
            {
                ID : 1,
                Author : "Brajeswar Ghosh",
                Image : "https://lp-cms-production.imgix.net/2021-07/GettyRF_582021521.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850",
                Title : "Rome : City of Seven Hills",
                Body : "Rome is regarded as one of the world's most beautiful ancient cities, and contains vast amounts of priceless works of art, palaces, museums, parks, churches, gardens, basilicas, temples, villas, piazzas, theatres, and other venues in general. As one of the world's most important and visited cities, there are numerous popular tourist attractions.",
                Category : "Tourism",
                Date : " May 03 2022",
                tags: ["Rome", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 2,
                Author : "Brajeswar Ghosh",
                Image : "https://www.raconteur.net/wp-content/uploads/2016/11/India-smart-cities-1280x720.jpg",
                Title : "EARNING ABROAD: CANYON GUIDING IN INDIA",
                Body : "Welcome to Earning Abroad! In this series I’ll introduce you to some inspiring and ambitious friends I’ve met on the road — friends who have found viable work away from their home countries.  Do you guys read Further Bound? If not, I recommend adding it to your reading list immediately. After years of mutual blog fandom, Further Bound author Hannah and I finally met during my last trip to London. We hit it off immediately and I was thrilled when we bumped back into each other once again during my latest trip to Indonesia. This time, I also met Hannah’s charming Scottish partner, Lee Vine. Over dinner at the local market, Lee mentioned his adventures as a canyoning guide in India, a decision he perhaps regretted when I started pestering him for an interview. Ever wonder what it’s like to spend your days leading high-adrenaline outdoor adventures? Over to Lee to find out!",
                Category : "Tourism",
                Date : " Feb 7, 2021",
                tags: ["Tourism", "India"],
                readtime: "4 mins read"
            },
            {
                ID : 3,
                Author : "NDTV",
                Image : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d3/a8/57/images-30-largejpg.jpg?w=1200&h=-1&s=1",
                Title : "Amber Palace Kolkata",
                Body : "Kolkata: American Airlines relaunched flights to India this week, nearly a decade after stopping them, looking to capitalise on growing demand for non-stop travel amid the coronavirus pandemic, a senior executive of the airline told Reuters.        With travel demand bouncing back at home, American Airlines wants to expand its international network and India was 'one of the biggest untapped markets' for it, said Tom Lattig, managing director of EMEA sales. 'A lot of customers really want to fly non- stop, particularly as we've come through the pandemic. We know there is huge demand for travel between India and the United States so there is an opportunity right now in the middle of the pandemic to come back,' Lattig said in an interview in New Delhi.       American Airlines, which suspended services to India in 2012, started flying between New Delhi and New York on the weekend and will add flights between India's tech city of Bengaluru and Seattle in March.If it succeeds with those two routes, it will add services to India's financial capital of Mumbai, Lattig said.",
                Category : "Tourism",
                Date : " November 14, 2021",
                tags: ["Tourism", "AirLines"],
                readtime: "6 mins read"
            },
            {
                ID : 4,
                Author : "NDTV",
                Image : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/08/05/989093-hawa-mahal-windy.jpg",
                Title : "Hawa Mahal Jaipur",
                Body : "Jaipur: American Airlines relaunched flights to India this week, nearly a decade after stopping them, looking to capitalise on growing demand for non-stop travel amid the coronavirus pandemic, a senior executive of the airline told Reuters.        With travel demand bouncing back at home, American Airlines wants to expand its international network and India was 'one of the biggest untapped markets' for it, said Tom Lattig, managing director of EMEA sales. 'A lot of customers really want to fly non- stop, particularly as we've come through the pandemic. We know there is huge demand for travel between India and the United States so there is an opportunity right now in the middle of the pandemic to come back,' Lattig said in an interview in New Delhi.       American Airlines, which suspended services to India in 2012, started flying between New Delhi and New York on the weekend and will add flights between India's tech city of Bengaluru and Seattle in March.If it succeeds with those two routes, it will add services to India's financial capital of Mumbai, Lattig said.",
                Category : "Tourism",
                Date : " November 14, 2021",
                tags: ["Tourism", "AirLines"],
                readtime: "6 mins read"
            },
            {
                ID : 5,
                Author : "NDTV",
                Image : "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/08/%E0%A4%86%E0%A4%97%E0%A4%B0%E0%A4%BE-%E0%A4%95%E0%A4%BE-%E0%A4%95%E0%A4%BF%E0%A4%B2%E0%A4%BE.jpg",
                Title : "Agra Fort",
                Body : "New Delhi: American Airlines relaunched flights to India this week, nearly a decade after stopping them, looking to capitalise on growing demand for non-stop travel amid the coronavirus pandemic, a senior executive of the airline told Reuters.        With travel demand bouncing back at home, American Airlines wants to expand its international network and India was 'one of the biggest untapped markets' for it, said Tom Lattig, managing director of EMEA sales. 'A lot of customers really want to fly non- stop, particularly as we've come through the pandemic. We know there is huge demand for travel between India and the United States so there is an opportunity right now in the middle of the pandemic to come back,' Lattig said in an interview in New Delhi.       American Airlines, which suspended services to India in 2012, started flying between New Delhi and New York on the weekend and will add flights between India's tech city of Bengaluru and Seattle in March.If it succeeds with those two routes, it will add services to India's financial capital of Mumbai, Lattig said.",
                Category : "Tourism",
                Date : " November 14, 2021",
                tags: ["Tourism", "AirLines"],
                readtime: "6 mins read"
            },
            {
                ID : 6,
                Author : "Brajeswar Ghosh",
                Image : "https://lp-cms-production.imgix.net/2021-07/GettyRF_582021521.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850",
                Title : "Rome : City of Seven Hills",
                Body : "Rome is regarded as one of the world's most beautiful ancient cities, and contains vast amounts of priceless works of art, palaces, museums, parks, churches, gardens, basilicas, temples, villas, piazzas, theatres, and other venues in general. As one of the world's most important and visited cities, there are numerous popular tourist attractions.",
                Category : "Tourism",
                Date : " May 03 2022",
                tags: ["Rome", "India"],
                readtime: "5 mins read"
            },
            {
                ID : 7,
                Author : "Brajeswar Ghosh",
                Image : "https://www.raconteur.net/wp-content/uploads/2016/11/India-smart-cities-1280x720.jpg",
                Title : "EARNING ABROAD: CANYON GUIDING IN INDIA",
                Body : "Welcome to Earning Abroad! In this series I’ll introduce you to some inspiring and ambitious friends I’ve met on the road — friends who have found viable work away from their home countries.  Do you guys read Further Bound? If not, I recommend adding it to your reading list immediately. After years of mutual blog fandom, Further Bound author Hannah and I finally met during my last trip to London. We hit it off immediately and I was thrilled when we bumped back into each other once again during my latest trip to Indonesia. This time, I also met Hannah’s charming Scottish partner, Lee Vine. Over dinner at the local market, Lee mentioned his adventures as a canyoning guide in India, a decision he perhaps regretted when I started pestering him for an interview. Ever wonder what it’s like to spend your days leading high-adrenaline outdoor adventures? Over to Lee to find out!",
                Category : "Tourism",
                Date : " Feb 7, 2021",
                tags: ["Tourism", "India"],
                readtime: "4 mins read"
            },
            {
                ID : 8,
                Author : "NDTV",
                Image : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d3/a8/57/images-30-largejpg.jpg?w=1200&h=-1&s=1",
                Title : "Amber Palace Kolkata",
                Body : "Kolkata: American Airlines relaunched flights to India this week, nearly a decade after stopping them, looking to capitalise on growing demand for non-stop travel amid the coronavirus pandemic, a senior executive of the airline told Reuters.        With travel demand bouncing back at home, American Airlines wants to expand its international network and India was 'one of the biggest untapped markets' for it, said Tom Lattig, managing director of EMEA sales. 'A lot of customers really want to fly non- stop, particularly as we've come through the pandemic. We know there is huge demand for travel between India and the United States so there is an opportunity right now in the middle of the pandemic to come back,' Lattig said in an interview in New Delhi.       American Airlines, which suspended services to India in 2012, started flying between New Delhi and New York on the weekend and will add flights between India's tech city of Bengaluru and Seattle in March.If it succeeds with those two routes, it will add services to India's financial capital of Mumbai, Lattig said.",
                Category : "Tourism",
                Date : " November 14, 2021",
                tags: ["Tourism", "AirLines"],
                readtime: "6 mins read"
            },
            {
                ID : 9,
                Author : "NDTV",
                Image : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/08/05/989093-hawa-mahal-windy.jpg",
                Title : "Hawa Mahal Jaipur",
                Body : "Jaipur: American Airlines relaunched flights to India this week, nearly a decade after stopping them, looking to capitalise on growing demand for non-stop travel amid the coronavirus pandemic, a senior executive of the airline told Reuters.        With travel demand bouncing back at home, American Airlines wants to expand its international network and India was 'one of the biggest untapped markets' for it, said Tom Lattig, managing director of EMEA sales. 'A lot of customers really want to fly non- stop, particularly as we've come through the pandemic. We know there is huge demand for travel between India and the United States so there is an opportunity right now in the middle of the pandemic to come back,' Lattig said in an interview in New Delhi.       American Airlines, which suspended services to India in 2012, started flying between New Delhi and New York on the weekend and will add flights between India's tech city of Bengaluru and Seattle in March.If it succeeds with those two routes, it will add services to India's financial capital of Mumbai, Lattig said.",
                Category : "Tourism",
                Date : " November 14, 2021",
                tags: ["Tourism", "AirLines"],
                readtime: "6 mins read"
            },
            {
                ID : 10,
                Author : "NDTV",
                Image : "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/08/%E0%A4%86%E0%A4%97%E0%A4%B0%E0%A4%BE-%E0%A4%95%E0%A4%BE-%E0%A4%95%E0%A4%BF%E0%A4%B2%E0%A4%BE.jpg",
                Title : "Agra Fort",
                Body : "New Delhi: American Airlines relaunched flights to India this week, nearly a decade after stopping them, looking to capitalise on growing demand for non-stop travel amid the coronavirus pandemic, a senior executive of the airline told Reuters.        With travel demand bouncing back at home, American Airlines wants to expand its international network and India was 'one of the biggest untapped markets' for it, said Tom Lattig, managing director of EMEA sales. 'A lot of customers really want to fly non- stop, particularly as we've come through the pandemic. We know there is huge demand for travel between India and the United States so there is an opportunity right now in the middle of the pandemic to come back,' Lattig said in an interview in New Delhi.       American Airlines, which suspended services to India in 2012, started flying between New Delhi and New York on the weekend and will add flights between India's tech city of Bengaluru and Seattle in March.If it succeeds with those two routes, it will add services to India's financial capital of Mumbai, Lattig said.",
                Category : "Tourism",
                Date : " November 14, 2021",
                tags: ["Tourism", "AirLines"],
                readtime: "6 mins read"
            },

            
        
        
        ]
        )
        return(
            <ArrayofBlogs.Provider value ={[data]}>
                {props.children}
            </ArrayofBlogs.Provider>
        )
}
