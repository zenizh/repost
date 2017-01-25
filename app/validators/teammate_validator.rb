class TeammateValidator < ActiveModel::Validator
  def validate(record)
    if record.team != record.member.team
      record.errors.add(:member, 'is not a teammate')
    end
  end
end
