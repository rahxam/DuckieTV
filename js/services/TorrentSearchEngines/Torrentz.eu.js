DuckieTV.run(["TorrentSearchEngines", "$q", "$http", "$injector",
    function(TorrentSearchEngines, $q, $http, $injector) {

        TorrentSearchEngines.registerSearchEngine('Torrentz', new GenericTorrentSearchEngine({
            mirror: 'https://torrentz.eu',
            mirrorResolver: null,
            endpoints: {
                search: '/search?f=%s',
                details: '/%s',
            },
            selectors: {
                resultContainer: 'div.results dl',
                releasename: ['dt a', 'innerText'],
                magneturl: ['dt a', 'href',
                    function(a) {
                        return 'magnet:?xt=urn:sha1:' + a.substring(1);
                    }
                ],
                size: ['dd span.s', 'innerText'],
                seeders: ['dd span.u', 'innerText'],
                leechers: ['dd span.d', 'innerText'],
                detailUrl: ['dt a', 'href']
            }

        }, $q, $http, $injector));
    }
]);