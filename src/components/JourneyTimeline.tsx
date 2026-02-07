import { useEffect, useRef, useState } from 'react';
import './JourneyTimeline.css';

interface TimelineItem {
  date: string;
  title: string;
  text: string;
  image: string;
}

const timelineData: TimelineItem[] = [
  {
    date: "12 Jan 2024",
    title: "The Day We First Met",
    text: "The day my heart quietly changed forever.",
    image: "/images/randomimages/imga.jpeg"
  },
  {
    date: "20 Jan 2024",
    title: "Our First Coffee Date",
    text: "Two hours felt like minutes when I'm with you.",
    image: "/images/randomimages/imgb.jpeg"
  },
  {
    date: "28 Jan 2024",
    title: "The Sunset Walk",
    text: "When I realized I never wanted to walk alone again.",
    image: "/images/randomimages/imgc.jpeg"
  },
  {
    date: "05 Feb 2024",
    title: "Our First Adventure",
    text: "Every adventure is better with you by my side.",
    image: "/images/randomimages/imgd.jpeg"
  },
  {
    date: "14 Feb 2024",
    title: "Valentine's Day",
    text: "The day I knew you were the one.",
    image: "/images/randomimages/imge.jpeg"
  },
  {
    date: "22 Feb 2024",
    title: "Making Memories",
    text: "Every moment with you becomes a treasure.",
    image: "/images/randomimages/imgf.jpeg"
  },
  {
    date: "05 Mar 2024",
    title: "Beautiful Days",
    text: "Sunshine is brighter when you're around.",
    image: "/images/randomimages/imgh.jpeg"
  },
  {
    date: "15 Mar 2024",
    title: "Laughter and Joy",
    text: "You make every day feel like a celebration.",
    image: "/images/randomimages/imgi.jpeg"
  },
  {
    date: "25 Mar 2024",
    title: "Growing Together",
    text: "With you, I've found my home.",
    image: "/images/randomimages/imgj.jpeg"
  },
  {
    date: "05 Apr 2024",
    title: "Spring Moments",
    text: "Creating memories that will last forever.",
    image: "/images/randomimages/imgk.jpeg"
  },
  {
    date: "18 Apr 2024",
    title: "Our Journey Continues",
    text: "Every step with you is a blessing.",
    image: "/images/randomimages/imgl.jpeg"
  },
  {
    date: "01 May 2024",
    title: "Sweet Memories",
    text: "The best gift is having you in my life.",
    image: "/images/randomimages/imgm.jpeg"
  },
  {
    date: "15 May 2024",
    title: "Together Forever",
    text: "Starting another chapter with you by my side.",
    image: "/images/randomimages/imgn.jpeg"
  },
  {
    date: "28 May 2024",
    title: "Precious Moments",
    text: "Every second with you is precious.",
    image: "/images/randomimages/imgo.jpeg"
  },
  {
    date: "10 Jun 2024",
    title: "Summer Love",
    text: "Our love grows stronger each day.",
    image: "/images/randomimages/imgp.jpeg"
  },
  {
    date: "22 Jun 2024",
    title: "Endless Happiness",
    text: "You bring endless joy to my life.",
    image: "/images/randomimages/imgq.jpeg"
  },
  {
    date: "05 Jul 2024",
    title: "Beautiful Journey",
    text: "Walking through life hand in hand.",
    image: "/images/randomimages/imgr.jpeg"
  },
  {
    date: "18 Jul 2024",
    title: "Cherished Times",
    text: "Every moment is a treasure with you.",
    image: "/images/randomimages/imgs.jpeg"
  },
  {
    date: "01 Aug 2024",
    title: "Love Grows",
    text: "Our love story continues to unfold.",
    image: "/images/randomimages/imgt.jpeg"
  },
  {
    date: "15 Aug 2024",
    title: "Perfect Days",
    text: "Perfect because I'm with you.",
    image: "/images/randomimages/imgu.jpeg"
  },
  {
    date: "28 Aug 2024",
    title: "Unforgettable",
    text: "Making unforgettable memories together.",
    image: "/images/randomimages/imgv.jpeg"
  },
  {
    date: "10 Sep 2024",
    title: "Always Together",
    text: "Side by side, always and forever.",
    image: "/images/randomimages/imgx.jpeg"
  },
  {
    date: "25 Sep 2024",
    title: "Endless Love",
    text: "My love for you knows no bounds.",
    image: "/images/randomimages/imgy.jpeg"
  },
  {
    date: "10 Oct 2024",
    title: "Forever Yours",
    text: "Today, tomorrow, and always yours.",
    image: "/images/randomimages/imgz.jpeg"
  },
  {
    date: "14 Feb 2025",
    title: "This Moment",
    text: "The day I ask you to be mine, forever.",
    image: "/images/randomimages/imgza.jpeg"
  }
];

const JourneyTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-container">
      <h2 className="timeline-header">Our Journey Together</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            ref={(el) => { itemRefs.current[index] = el; }}
            data-index={index}
            className={`timeline-item ${visibleItems.has(index) ? 'visible' : ''} ${
              index % 2 === 0 ? 'left' : 'right'
            }`}
          >
            <div className="timeline-content">
              <div className="timeline-card">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="timeline-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-text">{item.text}</p>
              </div>
            </div>
            <div className="timeline-dot">💕</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;
