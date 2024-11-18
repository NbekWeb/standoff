import { getRepository } from '#typeorm'
import { UserEntity } from '~~/server/entities/user.entity'
import type { CredentialType } from '~~/server/entities/credentials.entity'
import { CredentialModal } from '~~/server/entities/credentials.entity'

export const auth = async (props: { id: number; name: string; picture: string }, type: CredentialType) => {
  const credentialModel = await getRepository(CredentialModal)
  const userModel = await getRepository(UserEntity)

  let user: UserEntity | null

  const credential = await credentialModel.findOne({ where: { type, externalId: props.id } })
  if (!credential) {
    user = await userModel.create({
      name: props.name,
      defaultPhoto: props.picture,
      referral: null,
    }).save()

    await credentialModel.create({
      type: type,
      externalId: user.id,
    }).save()
  }
  else {
    user = credential.user
  }

  return user
}
