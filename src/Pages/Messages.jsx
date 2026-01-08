import React, { useState } from 'react';
import { Search, X, Calendar, User, BookOpen, Play } from 'lucide-react';

const Messages = () => {
  // Mock sermon data - replace with your actual data from database
  const allSermons = [
    {
      id: 1,
      title: "The Next Level",
      speaker: "Pastor Richmond Korley",
      date: "2025-11-02",
      series: "Next Level Series",
      description: "You can't reach the next level while remaining comfortable and attached to the old level.",
      spotifyUrl: "https://open.spotify.com/embed/episode/6ja8fcuWaKvCH92gqKP88S?utm_source=generator",
      thumbnail: '/images/NextLevel.jpg'
    },
    {
      id: 2,
      title: "TAKE STEPS OF FAITH.",
      speaker: "Pastor Emmanuel Arthur",
      date: "2025-11-08",
      series: "Faith Series",
      description: "We specially welcome you to the month of November and our theme for the month is TAKE STEPS OF FAITH",
      spotifyUrl: "https://open.spotify.com/embed/episode/65ghZFaAootxFfZuHH0s9r?utm_source=generator",
      thumbnail: '/images/faith.jpg'
    },
    {
        id: 3,
        title: "Matters of The Heart",
        speaker: "Pastor Richmond Korley",
        date: "2025-11-02",
        series: "Next Level Series",
        description: "We often talk about loving God and loving others, but where does that love truly originate?",
        spotifyUrl: "https://open.spotify.com/embed/episode/2YhrQwdiVK4PKJUc1pNqIT?utm_source=generator",
        thumbnail: '/images/MattersOfTheHeart.jpg'
      },
    {
        id: 4,
        title: "TAKE STEPS OF FAITH.",
        speaker: "Pastor Joseph Mensah",
        date: "2025-11-08",
        series: "Faith Series",
        description: "We specially welcome you to the month of November and our theme for the month is TAKE STEPS OF FAITH",
        spotifyUrl:"https://open.spotify.com/embed/episode/65ghZFaAootxFfZuHH0s9r?utm_source=generator",
        thumbnail: '/images/faith.jpg'
      },
      {
        id: 5,
        title: "The Next Level",
        speaker: "Pastor Leonard",
        date: "2025-11-02",
        series: "Next Level Series",
        description: "You can't reach the next level while remaining comfortable and attached to the old level.",
        spotifyUrl: "https://open.spotify.com/embed/episode/6ja8fcuWaKvCH92gqKP88S?utm_source=generator",
        thumbnail: '/images/NextLevel.jpg'
      },
      {
        id: 6,
        title: "TAKE STEPS OF FAITH.",
        speaker: "Pastor Eric Eghan",
        date: "2025-11-08",
        series: "Faith Series",
        description: "We specially welcome you to the month of November and our theme for the month is TAKE STEPS OF FAITH",
        spotifyUrl: "https://open.spotify.com/embed/episode/65ghZFaAootxFfZuHH0s9r?utm_source=generator",
        thumbnail: '/images/faith.jpg'
      }, 
      {
        id: 7,
        title: "TAKE STEPS OF FAITH.",
        speaker: "Pastor Joseph Mensah",
        date: "2025-11-08",
        series: "Faith Series",
        description: "We specially welcome you to the month of November and our theme for the month is TAKE STEPS OF FAITH",
        spotifyUrl:"https://open.spotify.com/embed/episode/65ghZFaAootxFfZuHH0s9r?utm_source=generator",
        thumbnail: '/images/faith.jpg'
      },
      {
        id: 8,
        title: "The Next Level",
        speaker: "Pastor Leonard",
        date: "2025-11-02",
        series: "Next Level Series",
        description: "You can't reach the next level while remaining comfortable and attached to the old level.",
        spotifyUrl: "https://open.spotify.com/embed/episode/6ja8fcuWaKvCH92gqKP88S?utm_source=generator",
        thumbnail: '/images/NextLevel.jpg'
      },
      {
        id: 9,
        title: "TAKE STEPS OF FAITH.",
        speaker: "Pastor Eric Eghan",
        date: "2025-11-08",
        series: "Faith Series",
        description: "We specially welcome you to the month of November and our theme for the month is TAKE STEPS OF FAITH",
        spotifyUrl: "https://open.spotify.com/embed/episode/65ghZFaAootxFfZuHH0s9r?utm_source=generator",
        thumbnail: '/images/faith.jpg'
      }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeries, setSelectedSeries] = useState('All');
  const [selectedSpeaker, setSelectedSpeaker] = useState('All');
  const [selectedSermon, setSelectedSermon] = useState(null);

  // Get unique series and speakers for filters
  const allSeries = ['All', ...new Set(allSermons.map(s => s.series))];
  const allSpeakers = ['All', ...new Set(allSermons.map(s => s.speaker))];

  // Filter sermons based on search and filters
  const filteredSermons = allSermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeries = selectedSeries === 'All' || sermon.series === selectedSeries;
    const matchesSpeaker = selectedSpeaker === 'All' || sermon.speaker === selectedSpeaker;
    
    return matchesSearch && matchesSeries && matchesSpeaker;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-x-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-10 sm:py-12 md:py-16 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto mt-8 sm:mt-10 md:mt-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Messages</h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100">Listen to transformative teachings from our pastoral team</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 -mt-6 sm:-mt-8 md:-mt-10 mb-6 sm:mb-8">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 border border-gray-100">
          {/* Search Bar */}
          <div className="relative mb-4 sm:mb-6">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} style={{ width: '18px', height: '18px' }} />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                <BookOpen className="inline mr-1.5 sm:mr-2" size={14} style={{ width: '14px', height: '14px' }} />
                Filter by Series
              </label>
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
              >
                {allSeries.map(series => (
                  <option key={series} value={series}>{series}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                <User className="inline mr-1.5 sm:mr-2" size={14} style={{ width: '14px', height: '14px' }} />
                Filter by Speaker
              </label>
              <select
                value={selectedSpeaker}
                onChange={(e) => setSelectedSpeaker(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
              >
                {allSpeakers.map(speaker => (
                  <option key={speaker} value={speaker}>{speaker}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
            Showing {filteredSermons.length} of {allSermons.length} messages
          </div>
        </div>
      </div>

      {/* Sermon Grid */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {filteredSermons.map(sermon => (
            <div
              key={sermon.id}
              className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer border border-gray-100 touch-manipulation"
              onClick={() => setSelectedSermon(sermon)}
            >
              {/* Thumbnail */}
              <div className="relative h-40 sm:h-48 bg-gradient-to-br from-blue-400 to-indigo-600 overflow-hidden">
                <img 
                  src={sermon.thumbnail} 
                  alt={sermon.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/65 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="text-white" size={40} style={{ width: '40px', height: '40px' }} />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {sermon.series}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {sermon.title}
                </h3>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                  {sermon.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 pt-3 border-t border-gray-100">
                  <div className="flex items-center text-gray-700 text-xs sm:text-sm">
                    <User size={14} className="sm:w-4 sm:h-4 mr-1" />
                    <span className="font-medium truncate">{sermon.speaker}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                    <Calendar size={14} className="sm:w-4 sm:h-4 mr-1" />
                    <span>{new Date(sermon.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredSermons.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto sm:w-16 sm:h-16" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-2">No messages found</h3>
            <p className="text-sm sm:text-base text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Sermon Player Modal */}
      {selectedSermon && (
        <div 
          className="fixed inset-0 bg-black bg-black/35 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto"
          onClick={() => setSelectedSermon(null)}
        >
          <div 
            className="bg-white rounded-xl sm:rounded-2xl max-w-3xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl my-4 sm:my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-4 sm:p-5 md:p-6 rounded-t-xl sm:rounded-t-2xl">
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1 min-w-0">
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-700 text-white text-xs font-semibold rounded-full inline-block mb-2 sm:mb-3">
                    {selectedSermon.series}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{selectedSermon.title}</h2>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-blue-100 text-sm sm:text-base">
                    <div className="flex items-center">
                      <User size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2" />
                      <span className="truncate">{selectedSermon.speaker}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2" />
                      <span>{new Date(selectedSermon.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSermon(null)}
                  className="text-white hover:bg-white hover:bg-opacity-20 active:bg-opacity-30 rounded-full p-1.5 sm:p-2 transition-colors flex-shrink-0 touch-manipulation"
                  aria-label="Close modal"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-5 md:p-6">
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                {selectedSermon.description}
              </p>

              {/* Spotify Player */}
              <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border-2 border-gray-200 overflow-hidden">
                <iframe
                  src={selectedSermon.spotifyUrl}
                  width="100%"
                  height="232"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg w-full"
                ></iframe>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg sm:rounded-xl border border-blue-100">
                <p className="text-xs sm:text-sm text-blue-900">
                  <strong>Note:</strong> You'll need a Spotify account (free or premium) to listen. If the player doesn't load, try opening Spotify directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;