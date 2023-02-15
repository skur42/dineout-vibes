import { Icon } from "@/atoms/Icon"

export const LocationHeader = () => {
  return (
    <div className="flex items-center px-2">
      <Icon name="Location" iconProps="w-6 h-6 fill-white" />
      <div className="text-xl font-semibold text-white ml-2">Gurugram</div>
    </div>
  )
}