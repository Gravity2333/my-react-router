export default function UserInfo({match}: {match: any}){
    console.log(match)
    return <>user info: {match.params?.id}</>
}