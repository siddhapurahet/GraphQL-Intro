let games = [
    {id:'1', title:'game 1', platform:['platform-1', 'platform-3']},
    {id:'2', title:'game 2', platform:['platform-4', 'platform-3', 'platform-6']},
    {id:'3', title:'game 3', platform:['platform-7', 'platform-4']},
    {id:'4', title:'game 4', platform:['platform-6', 'platform-2', 'platform-9']}
]

let authors = [
    {id: '1', name: 'ABC', verified: true, game_id: '1'},
    {id: '2', name: 'HNB', verified: true, game_id: '2'},
    {id: '3', name: 'HIJ', verified: false, game_id: '3'},
    {id: '4', name: 'EFG', verified: false, game_id: '4'},
]

let reviews = [
    {id: '1', rating: 4, content: 'nice one', author_id: '2', game_id: '1'},
    {id: '2', rating: 3, content: 'good', author_id: '3', game_id: '3'},
    {id: '3', rating: 2, content: 'Excellent', author_id: '1', game_id: '4'},
    {id: '4', rating: 5, content: 'Okay', author_id: '4', game_id: '2'},

]

export default {reviews, games, authors};