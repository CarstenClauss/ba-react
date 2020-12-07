import React from 'react';
import Script from 'react-load-script';

export default function GoogleTrends({ type, url }) {
  const handleScriptLoad = () => {
    window.trends.embed.renderExploreWidgetTo(
      document.getElementById('widget'),
      type,
      {
        comparisonItem: [{ keyword: 'React', geo: '', time: 'today 5-y' }, { keyword: 'Vue', geo: '', time: 'today 5-y' }, { keyword: 'Angular', geo: '', time: 'today 5-y' }],
        category: 733,
        property: '',
      },
      {
        exploreQuery: 'cat=733&date=today%205-y&q=React,Vue,Angular',
        guestPath: 'https://trends.google.com:443/trends/embed/',
      },
    );
  };

  const renderGoogleTrend = () => <Script url={url} onLoad={handleScriptLoad} />;

  return <div className="googleTrend">{renderGoogleTrend()}</div>;
}
