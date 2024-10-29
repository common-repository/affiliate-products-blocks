/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
// import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		uniqueId,
		boxBorder,
		boxBorderRadius,
		boxBg,
		showBadge,
		badgeText,
		badgeColor,
		badgeBg,
		showRating,
		rating,
		title,
		titleTag,
		titleColor,
		description,
		descriptionColor,
		url,
		id,
		alt,
		photoReversePosition,
		propsConsBorder,
		propsConsBorderRadius,
		propsConsBg,
		propsList,
		propsListColor,
		propsIconColor,
		consList,
		consListColor,
		consIconColor,
		btnLabel,
		btnLink,
		newTabTarget,
		color,
		bgColor,
		border,
		borderRadius,
	} = attributes;
	return (
		<div {...useBlockProps.save()}>
			{showBadge && (
				<div
					className={`afpb__badge`}
					style={{
						color: badgeColor,
						backgroundColor: badgeBg,
					}}
				>
					{badgeText}
				</div>
			)}
			<div
				className={`afpb__product_info ${
					photoReversePosition ? 'afpb__product_info--reverse' : ''
				}`}
				style={{
					border: `${boxBorder.width} ${boxBorder.style} ${boxBorder.color}`,
					borderRadius: `${boxBorderRadius}px`,
					backgroundColor: boxBg,
				}}
			>
				<div className="product_photo">
					{url && (
						<img src={url} alt={alt} className={`wp-image-${id}`} />
					)}
				</div>
				<div className="product_content">
					<RichText.Content
						tagName={titleTag}
						value={title}
						className="title_tag"
						style={{
							color: titleColor,
						}}
					/>
					{showRating && (
						<div className="product_rating">
							<span className="rating_value">{rating}</span>
							<div
								className="review-rating"
								data-rate-value={rating}
							></div>
						</div>
					)}
					<div
						className="product_description"
						style={{
							color: descriptionColor,
						}}
					>
						<RichText.Content
							tagName="p"
							value={description}
							multiline="p"
						/>
					</div>
				</div>
			</div>
			<div
				className="afpb__props_cons"
				style={{
					backgroundColor: propsConsBg,
					border: `${propsConsBorder.width} ${propsConsBorder.style} ${propsConsBorder.color}`,
					borderRadius: `${propsConsBorderRadius}px`,
				}}
			>
				<div className="afpb__props_box">
					<div
						className="afpb__icon"
						style={{
							border: `${propsConsBorder.width} ${propsConsBorder.style} ${propsConsBorder.color}`,
						}}
					>
						<i
							className="fa-solid fa-thumbs-up"
							style={{
								color: propsIconColor,
							}}
						></i>
					</div>
					<div
						className={`afpb__props_list`}
						id={`afpb__props_${uniqueId}`}
						style={{
							color: propsListColor,
						}}
					>
						<RichText.Content
							tagName="ul"
							multiline="li"
							value={propsList}
						/>
					</div>
				</div>
				<div className="afpb__cons_box">
					<div
						className="afpb__icon"
						style={{
							border: `${propsConsBorder.width} ${propsConsBorder.style} ${propsConsBorder.color}`,
						}}
					>
						<i
							className="fa-solid fa-thumbs-down"
							style={{
								color: consIconColor,
							}}
						></i>
					</div>
					<div
						className="afpb__cons_list"
						id={`afpb__cons_${uniqueId}`}
						style={{
							color: consListColor,
						}}
					>
						<RichText.Content
							tagName="ul"
							multiline="li"
							value={consList}
						/>
					</div>
				</div>
			</div>
			<a
				href={btnLink}
				target={newTabTarget ? '_blank' : '_self'}
				rel={newTabTarget ? 'noopener noreferrer' : 'noopener'}
				className={`afpb__btn afpb__btn_${uniqueId}`}
				style={{
					color,
					backgroundColor: bgColor,
					border: `${border.width} ${border.style} ${border.color}`,
					borderRadius: `${borderRadius}px`,
				}}
			>
				{btnLabel}
			</a>
		</div>
	);
}