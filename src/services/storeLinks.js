//Buscar links salvos
export async function getLinkSave(key) {
  const myLinks = await localStorage.getItem(key);
  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

//salvar um link no storage
export async function saveLink(key, newLink) {
  let linksStored = await getLinkSave(key);

  //verificar se existe link salvo
  const hasLinks = linksStored.some((link) => link.id === newLink.id);

  if (hasLinks) {
    console.log("esse link ja existe na lista");
    return;
  }
  //adicionar novo link na lista
  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
}

//deletar algum link salvo

export function deleteLink(links, id) {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem("@encurtaLink", JSON.stringify(myLinks));
  console.log("Link deletado com sucesso");

  return myLinks;
}
